export interface IEmploymentRecord {
  company: string,
  title: string,
  startDate: Date,
  endDate: Date,
  accomplishments: string[]
}

export class EmploymentRecord implements IEmploymentRecord {
  company: string = 'No Company Provided';
  title: string = 'No Title';
  startDate: Date = new Date(2060, 1, 31);
  endDate: Date = new Date(2060, 12, 31);
  accomplishments: string[] = ['No accomplishments'];
}

