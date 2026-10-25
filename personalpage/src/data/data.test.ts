import { describe, expect, it } from "vitest";
import { isPresent } from "../dates";
import { companies, schools } from ".";

// TypeScript checks the shape of the JSON; these check the values.
const isoDate = /^\d{4}-\d{2}-\d{2}$/;

const expectValidDate = (date: string) => {
  expect(date).toMatch(isoDate);
  expect(Number.isNaN(new Date(date).getTime())).toBe(false);
};

const expectHttpsUrl = (url: string) => expect(new URL(url).protocol).toBe("https:");

describe("jobHistory.json", () => {
  it("has at least one company", () => {
    expect(companies.length).toBeGreaterThan(0);
  });

  it.each(companies.map((c) => [c.name, c] as const))("%s has valid data", (_, company) => {
    expectHttpsUrl(company.logoUrl);
    expectHttpsUrl(company.companyUrl);
    expect(company.roles.length).toBeGreaterThan(0);

    for (const role of company.roles) {
      expect(role.title.trim()).not.toBe("");
      expect(role.accomplishments.length).toBeGreaterThan(0);
      expectValidDate(role.startDate);
      if (!isPresent(role.endDate)) {
        expectValidDate(role.endDate);
        expect(role.endDate >= role.startDate).toBe(true);
      }
    }
  });

  it("uses unique company names (they are React keys)", () => {
    expect(new Set(companies.map((c) => c.name)).size).toBe(companies.length);
  });
});

describe("schoolHistory.json", () => {
  it.each(schools.map((s) => [s.name, s] as const))("%s has valid data", (_, school) => {
    expectHttpsUrl(school.logoUrl);
    expectHttpsUrl(school.schoolUrl);
    expectValidDate(school.startDate);
    expectValidDate(school.endDate);
    expect(school.endDate >= school.startDate).toBe(true);
  });

  it("uses unique school names (they are React keys)", () => {
    expect(new Set(schools.map((s) => s.name)).size).toBe(schools.length);
  });
});
