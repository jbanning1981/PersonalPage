import { describe, expect, it } from "vitest";
import { companies, schools } from "./data";
import { render } from "./entry-server";

describe("render", () => {
  const html = render();

  it("renders both sections", () => {
    expect(html).toContain("Work History");
    expect(html).toContain("Education");
  });

  it("renders every company and school", () => {
    for (const name of [...companies, ...schools].map((x) => x.name)) {
      expect(html).toContain(name.replace("&", "&amp;"));
    }
  });

  it("includes valid schema.org Person data", () => {
    const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/)?.[1];
    expect(json).toBeDefined();
    expect(JSON.parse(json!)).toMatchObject({ "@type": "Person", name: "Jim Banning" });
  });
});
