// Last build step: fails the build if the published HTML is missing the content
// or the SEO tags that crawlers, link previews and AI tools rely on.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(root, "dist", "personalpage", "index.html");
const html = await fs.readFile(indexPath, "utf8");

const failures = [];
const check = (ok, message) => ok || failures.push(message);
const metaContent = (attr, name) =>
  html.match(new RegExp(`<meta ${attr}="${name.replace(/[:.]/g, "\\$&")}" content="([^"]*)"`))?.[1];

check(!html.includes("<!--app-html-->"), "The page was not pre-rendered (<!--app-html--> is still in #root)");
check(/<title>[^<]+<\/title>/.test(html), "Missing <title>");
check(metaContent("name", "description")?.trim(), "Missing <meta name=\"description\">");
check(/<link rel="canonical" href="https:\/\/[^"]+"/.test(html), "Missing canonical link");
check(metaContent("property", "og:title")?.trim(), "Missing og:title");
check(metaContent("property", "og:image")?.startsWith("https://"), "og:image must be an absolute https URL");
check(/<h1[\s>]/.test(html), "No <h1> in the page");
check(html.includes("<main"), "No <main> landmark");
check(html.includes("Work History"), "Work History section missing");
check(html.includes("Education"), "Education section missing");

const jsonLd = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1];
if (!jsonLd) {
  failures.push("Missing JSON-LD structured data");
} else {
  try {
    const data = JSON.parse(jsonLd);
    check(data["@type"] === "Person" && data.name, "JSON-LD is not a schema.org Person with a name");
  } catch (error) {
    failures.push(`JSON-LD is not valid JSON: ${error.message}`);
  }
}

if (failures.length > 0) {
  console.error(`Pre-render check failed for ${path.relative(root, indexPath)}:`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

console.log("Pre-render check passed");
