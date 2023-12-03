import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-matrix',
  standalone: true,
  imports: [],
  templateUrl: './matrix.component.html',
  styleUrl: './matrix.component.css'
})
export class MatrixComponent {
  @Input('title') title!: string;
  @Input('code') code!: string;
}
