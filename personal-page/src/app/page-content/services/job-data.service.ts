import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IEmploymentRecord } from '../models/EmploymentRecord';

@Injectable({
  providedIn: 'root',
})
export class JobService {

  constructor(private http: HttpClient) { }

  getJobHistory(): Observable<IEmploymentRecord[]> {
    return this.http.get<IEmploymentRecord[]>('assets/jobhistory.json');
  }

}
