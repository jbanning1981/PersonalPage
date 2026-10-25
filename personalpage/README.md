# personalpage

React 19 + TypeScript + Vite, styled with Bootstrap 5 (Sass).

## Commands

| Command           | What it does                                          |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Dev server with hot reload at http://localhost:5173   |
| `npm run build`   | Type-check, build and pre-render to `dist/personalpage` |
| `npm run preview` | Serve the production build locally                    |
| `npm run lint`    | ESLint                                                |

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

## Deploying

Run the **Manually Publish Azure Static Web App** workflow in GitHub Actions.
Headers, caching and the 404 page are configured in `public/staticwebapp.config.json`.
