import { Routes } from '@angular/router';

import { HomeComponent } from './public/pages/home/home.component';
import { PortfolioComponent } from './public/pages/portfolio/portfolio.component';
import { CoursesComponent } from './public/pages/courses/courses.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { WorkExperienceComponent } from './public/pages/work-experience/work-experience.component';
import { lazyAuthGuardGuard } from './utils/security/guards/lazy-auth-guard.guard';
import { UnauthorizedComponent } from './public/pages/unauthorized/unauthorized.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'experience', component: WorkExperienceComponent },
    { path: 'experience', component: WorkExperienceComponent },
    { path: 'dashboard', canMatch: [lazyAuthGuardGuard], loadChildren: () => import('./private/dashboard.routes').then(route => route.DASHBOARD_ROUTES) },
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
