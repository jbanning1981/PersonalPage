import type { DateOrPresent, Role } from "./types";

export const PRESENT = "Present";

// A fixed locale and UTC keep the output identical at build time and in every
// visitor's browser. ISO date-only strings are parsed as UTC midnight, so
// formatting in a local US time zone would shift "2024-06-01" back to May.
const monthYear = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  timeZone: "UTC",
});

export const isPresent = (date: DateOrPresent) => date.toLowerCase() === PRESENT.toLowerCase();

export const formatMonthYear = (date: DateOrPresent) =>
  isPresent(date) ? PRESENT : monthYear.format(new Date(date));

/** Value for a <time datetime> attribute, e.g. "2024-06". */
export const toMonthAttr = (isoDate: string) => isoDate.slice(0, 7);

/** Earliest start and latest end across a company's roles. ISO strings sort chronologically. */
export const getTenure = (roles: Role[]) => {
  const start = roles.map((r) => r.startDate).sort()[0];
  const end = roles.some((r) => isPresent(r.endDate))
    ? PRESENT
    : roles.map((r) => r.endDate).sort().at(-1)!;
  return { start, end };
};
