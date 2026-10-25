/** ISO 8601 date (yyyy-mm-dd), or "Present" for an ongoing role. */
export type DateOrPresent = string;

export interface Role {
  title: string;
  startDate: string;
  endDate: DateOrPresent;
  accomplishments: string[];
}

export interface Company {
  name: string;
  logoUrl: string;
  companyUrl: string;
  roles: Role[];
}

export interface School {
  name: string;
  degree: string;
  degreeType: string;
  startDate: string;
  endDate: string;
  logoUrl: string;
  schoolUrl: string;
  highlights: string[];
}
