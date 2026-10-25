import { describe, expect, it } from "vitest";
import { formatMonthYear, getTenure, isPresent, toMonthAttr } from "./dates";
import type { Role } from "./types";

const role = (startDate: string, endDate: string): Role => ({
  title: "Developer",
  startDate,
  endDate,
  accomplishments: [],
});

describe("formatMonthYear", () => {
  it("formats an ISO date as month and year", () => {
    expect(formatMonthYear("2024-06-20")).toBe("June 2024");
  });

  // Runs with TZ=America/Chicago (see vite.config.ts). Without timeZone: "UTC"
  // in the formatter, this would print "May 2024".
  it("does not shift the first of the month into the previous month", () => {
    expect(formatMonthYear("2024-06-01")).toBe("June 2024");
  });

  it("passes Present through, in any case", () => {
    expect(formatMonthYear("Present")).toBe("Present");
    expect(formatMonthYear("present")).toBe("Present");
  });
});

describe("isPresent", () => {
  it("only matches Present", () => {
    expect(isPresent("PRESENT")).toBe(true);
    expect(isPresent("2024-06-20")).toBe(false);
  });
});

describe("toMonthAttr", () => {
  it("returns yyyy-mm for a <time datetime> attribute", () => {
    expect(toMonthAttr("2024-06-20")).toBe("2024-06");
  });
});

describe("getTenure", () => {
  it("uses the earliest start and the latest end, regardless of order", () => {
    const roles = [role("2018-01-01", "2019-06-30"), role("2015-03-17", "2021-12-10"), role("2016-01-01", "2017-01-01")];
    expect(getTenure(roles)).toEqual({ start: "2015-03-17", end: "2021-12-10" });
  });

  it("ends at Present when any role is current", () => {
    const roles = [role("2024-06-20", "Present"), role("2021-12-20", "2024-06-20")];
    expect(getTenure(roles)).toEqual({ start: "2021-12-20", end: "Present" });
  });
});
