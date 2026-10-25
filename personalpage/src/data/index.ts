import type { Company, School } from "../types";
import jobHistory from "./jobHistory.json";
import schoolHistory from "./schoolHistory.json";

// Imported at build time so the content is part of the pre-rendered HTML.
// The type annotations make the compiler check the JSON against the interfaces.
export const companies: Company[] = jobHistory;
export const schools: School[] = schoolHistory;

export const profile = {
  name: "Jim Banning",
  headline: "North Texas C#/.NET Dev",
  jobTitle: "Software Developer",
  siteUrl: "https://jimbanning.com/",
  portraitUrl: "/portrait.png",
  linkedInUrl: "https://www.linkedin.com/in/jimbanning",
};
