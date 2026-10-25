import { readFile } from "node:fs/promises";
import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Serve a fixed local image for the company and school logos. That keeps the tests
// independent of blob storage and makes the screenshots repeatable.
test.beforeEach(async ({ page }) => {
  const placeholder = await readFile("public/apple-touch-icon.png");
  await page.route("https://jbanning1981.blob.core.windows.net/**", (route) =>
    route.fulfill({ body: placeholder, contentType: "image/png" }),
  );
});

test("loads and hydrates without errors", async ({ page }) => {
  // React reports hydration mismatches through console.error.
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("/");
  await page.waitForLoadState("networkidle");

  expect(errors).toEqual([]);
});

test("shows exactly one heading level 1", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1:visible")).toHaveCount(1);
  await expect(page.locator("h1:visible")).toContainText("Jim Banning");
});

test("has no detectable accessibility violations", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();

  // Print a readable list on failure instead of the raw axe objects.
  const violations = results.violations.map((v) => `${v.id}: ${v.help} (${v.nodes.length} element(s))`);
  expect(violations).toEqual([]);
});

test("matches the visual baseline", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await expect(page).toHaveScreenshot("home.png", { fullPage: true });
});
