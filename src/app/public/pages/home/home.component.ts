import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { HeaderComponent } from '../components/header/header.component';
import { TechnologiesComponent } from '../components/technologies/technologies.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DividerModule, ButtonModule, HeaderComponent, TechnologiesComponent, CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name: string = 'Cristhian Villegas Garcia'
}
