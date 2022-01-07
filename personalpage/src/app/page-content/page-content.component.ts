import { Component, OnInit } from '@angular/core';
import { JobService } from './services/job-data.service';
import { SchoolService } from './services/school-data.service';
import { IEmploymentRecord } from './models/EmploymentRecord';
import { ISchoolRecord } from './models/SchoolRecord';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {

  public JobHistory: IEmploymentRecord[] = new Array(0);
  public SchoolHistory: ISchoolRecord[] = new Array(0);

  constructor(private jobService: JobService, private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.loadJobHistory();
    this.loadSchoolHistory();
  }

  loadSchoolHistory() {
    this.schoolService.getSchoolHistory()
      .subscribe(data => {
        if (Array.isArray(data)) {
          this.SchoolHistory = data;
        }
        else {
          this.SchoolHistory = [];
        }
      });
  }

  loadJobHistory(): void {
    this.jobService.getJobHistory()
      .subscribe(data => {
        if (Array.isArray(data)) {
          this.JobHistory = data;
        }
        else {
          this.JobHistory = [];
        }

      });
  }
}
