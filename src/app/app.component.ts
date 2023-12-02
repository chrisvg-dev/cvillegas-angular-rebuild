import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuBarComponent } from "./commons/components/menu-bar/menu-bar.component";

import { DividerModule } from 'primeng/divider';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, MenuBarComponent, RouterOutlet, RouterLink, RouterLinkActive, DividerModule]
})
export class AppComponent implements OnInit {
  title = 'CVILLEGAS DEV';
  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Testing angular 17 and SSR')
    }
  }
}
