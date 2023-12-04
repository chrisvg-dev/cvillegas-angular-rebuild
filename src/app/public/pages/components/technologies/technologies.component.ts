import { Component, ViewEncapsulation } from '@angular/core';
import { TabViewModule} from 'primeng/tabview'

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [TabViewModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {

}
