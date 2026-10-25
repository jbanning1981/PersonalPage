// Build step 3 of 3 (see "build" in package.json):
// renders <App /> to HTML and writes it into dist/personalpage/index.html,
// so the published page contains the real content instead of an empty <div>.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.join(root, "dist", "personalpage");
const serverDir = path.join(root, "dist", "server");
const indexPath = path.join(clientDir, "index.html");

const placeholder = "<!--app-html-->";
const template = await fs.readFile(indexPath, "utf8");
if (!template.includes(placeholder)) {
  throw new Error(`${placeholder} not found in ${indexPath}`);
}

const { render } = await import(pathToFileURL(path.join(serverDir, "entry-server.js")).href);
await fs.writeFile(indexPath, template.replace(placeholder, render()));
await fs.rm(serverDir, { recursive: true, force: true });

console.log(`Pre-rendered ${path.relative(root, indexPath)}`);
