import { Component } from '@angular/core';
import { MatrixComponent } from '../../components/matrix/matrix.component';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [MatrixComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
