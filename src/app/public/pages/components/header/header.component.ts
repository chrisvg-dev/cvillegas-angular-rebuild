import { Component } from '@angular/core';
import { Divider, DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DividerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name: string = 'Software Engineer (Java, Angular, DevOps)'
}
