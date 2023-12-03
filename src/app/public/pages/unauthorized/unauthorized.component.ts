import { Component } from '@angular/core';
import { MatrixComponent } from '../../components/matrix/matrix.component';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [MatrixComponent],
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.css'
})
export class UnauthorizedComponent {

}
