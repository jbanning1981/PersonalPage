# personalpage

React 19 + TypeScript + Vite, styled with Bootstrap 5 (Sass).

## Commands

| Command           | What it does                                          |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Dev server with hot reload at http://localhost:5173   |
| `npm run build`   | Type-check, build, pre-render to `dist/personalpage`, and check the result |
| `npm run preview` | Serve the production build locally                    |
| `npm run lint`    | ESLint                                                |
| `npm test`        | Unit tests (Vitest): dates, JSON data, server render  |
| `npm run test:e2e`| Browser tests (Playwright) against the build; run `npm run build` first |

## How the page is built

The site is pre-rendered, so the published `index.html` contains the full page
content. Search engines, link previews and AI tools can read it without running
JavaScript. `npm run build` does this in three steps:

1. `vite build`: the normal client bundle (`src/entry-client.tsx`).
2. `vite build --ssr src/entry-server.tsx`: a Node bundle that can render `<App />` to a string.
3. `node prerender.js`: renders the app and writes the HTML into
   `dist/personalpage/index.html` in place of `<!--app-html-->`.

In the browser, React then *hydrates* that HTML (attaches to it) instead of building
the page from scratch.

## Editing content

- Work history: `src/data/jobHistory.json`
- Education: `src/data/schoolHistory.json`
- Name, headline and links: `profile` in `src/data/index.ts`
- Page title, description and link-preview tags: `index.html`

Dates are ISO (`yyyy-mm-dd`). Use `"Present"` as the `endDate` of a current role.

## Checks on pull requests

These run on every pull request to `main` and are meant to be required checks:

| Check | Workflow | What it covers |
| --- | --- | --- |
| `build` | `ci.yml` | Lint, type-check, unit tests, build, pre-render check (`scripts/check-prerender.js`) |
| `e2e` | `ci.yml` | No console or hydration errors, one visible `<h1>`, axe accessibility scan, screenshot comparison (desktop and mobile) |
| `dependency-review` | `dependency-review.yml` | New or upgraded packages with known vulnerabilities |
| `Analyze` | `codeql-analysis.yml` | CodeQL security analysis |

### Screenshot baselines

Screenshots vary by operating system and fonts, so the baselines in `e2e/__screenshots__`
come from the same Linux Playwright container CI uses. Local runs on Windows skip
the screenshot comparison. When a change is meant to alter how the page looks:

1. Add the `update-screenshots` label to the pull request. A workflow regenerates
   the baselines and commits them to the branch.
2. Review the new images in the PR's changed files.
3. Push a commit (`git pull`, then `git commit --allow-empty -m "Re-run checks"` and
   `git push`) so the checks run again. GitHub doesn't run checks for commits made by a workflow.

The Playwright image version in the workflows must match `@playwright/test` in `package.json`.
Upgrade them together.

## Deploying

Run the **Manually Publish Azure Static Web App** workflow in GitHub Actions.
Headers, caching and the 404 page are configured in `public/staticwebapp.config.json`.
