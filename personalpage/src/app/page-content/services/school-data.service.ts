import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ISchoolRecord } from '../models/SchoolRecord';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  getSchoolHistory(): Observable<ISchoolRecord[]> {
    return this.http.get<ISchoolRecord[]>('assets/schoolHistory.json');
  }

}
