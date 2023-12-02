import { Component } from '@angular/core';

import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { CvillegasBackendService } from '../../../../services/cvillegas-backend.service';
import { Job } from '../../../../commons/model/models';

@Component({
  selector: 'job-list',
  standalone: true,
  imports: [DividerModule, ChipModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  jobs: Job[] = [];

  constructor(private backend: CvillegasBackendService) {}
  
  async ngOnInit(){
    await this.loadJobs();
  }

  async loadJobs() {
    (await this.backend.findJobs()).subscribe(
      {
        next: resp => {
          console.log(resp)
          this.jobs = resp.data;
        }
      }
    );
  }
}
