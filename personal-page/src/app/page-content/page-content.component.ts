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
    console.log('Page Content Loaded');
    this.JobHistory.push(new EmploymentRecord());
    this.LoadJobHistory();
  }

  LoadJobHistory(): void {
    console.log('Load job history using API call');
    this.jobService.getJobHistory()
      .subscribe(data => {
        this.JobHistory = data;
        console.log(data);
      });
  }

  DisplayJobHistory(): void {
    console.log('Display job history. ngFor?');
    console.log(this.JobHistory);
    for (var index in this.JobHistory) {
      console.log(this.JobHistory[index]);
    }
  }


}
