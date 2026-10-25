import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

// Used only at build time by prerender.js to produce the static HTML.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
