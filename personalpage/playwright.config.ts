import { defineConfig, devices } from "@playwright/test";

const isCI = !!process.env.CI;

// Browser tests against the production build (npm run build first).
// https://playwright.dev/docs/test-configuration
export default defineConfig({
  testDir: "e2e",
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  reporter: isCI ? [["github"], ["html", { open: "never" }]] : "list",

  // Screenshots depend on the OS and its fonts, so baselines are generated in the
  // Playwright Linux container that CI uses (see .github/workflows/update-screenshots.yml).
  // Local runs on Windows skip the screenshot comparison.
  ignoreSnapshots: !isCI,
  snapshotPathTemplate: "{testDir}/__screenshots__/{testFilePath}/{arg}-{projectName}{ext}",
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.01, animations: "disabled" },
  },

  use: {
    baseURL: "http://localhost:4173",
    trace: "on-first-retry",
  },

  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],

  webServer: {
    command: "npm run preview -- --port 4173 --strictPort",
    url: "http://localhost:4173",
    reuseExistingServer: !isCI,
  },
});
