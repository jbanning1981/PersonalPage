import { Component, OnInit } from '@angular/core';
import { IEmploymentRecord, EmploymentRecord } from './data/EmploymentRecord';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  private JobHistory: EmploymentRecord[] = new Array(4);
}
