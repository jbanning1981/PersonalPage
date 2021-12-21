import { Component, OnInit } from '@angular/core';
import { JobService } from './services/job-data.service';
import { IEmploymentRecord, EmploymentRecord } from './models/EmploymentRecord';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {

  public JobHistory: IEmploymentRecord[] = new Array(0);

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.JobHistory.push(new EmploymentRecord());
    this.LoadJobHistory();
  }

  LoadJobHistory(): void {
    this.jobService.getJobHistory()
      .subscribe(data => {
        this.JobHistory = data;
        
      });
  }
}
