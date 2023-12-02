import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job, JobResponse } from '../commons/model/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvillegasBackendService {

  constructor(private http: HttpClient) { }

  // Work experience
  async findJobs(): Promise<Observable<JobResponse>> {
    return await this.http.get<JobResponse>('http://localhost:9191/api/v1/info/jobs');
  }
}
