import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { FieldsetModule } from 'primeng/fieldset'
import { CvillegasBackendService } from '../../../services/cvillegas-backend.service';
import { Job } from '../../../commons/model/models';
import { JobsComponent } from '../components/jobs/jobs.component';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [DividerModule, ButtonModule, ChipModule, ProgressSpinnerModule, JobsComponent, ProgressBarModule, FieldsetModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent implements OnInit {
  ngOnInit(): void {
  }
  title: string = 'Work Experience';
}
