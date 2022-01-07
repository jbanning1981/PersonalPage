export interface ISchoolRecord {
  name: string,
  degree: string,
  degreeType: string,
  startDate: Date,
  endDate: Date,
  logoUrl: string,
  schoolUrl: string,
  description: string
  highlights: string[]
}

export class SchoolRecord implements ISchoolRecord {
  name: string = '';
  degree: string = '';
  degreeType: string = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  logoUrl: string = '';
  schoolUrl: string = '';
  description: string = '';
  highlights: string[] = [];
}

