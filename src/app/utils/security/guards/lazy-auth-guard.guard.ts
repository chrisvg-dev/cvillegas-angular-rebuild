import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthenticationService } from '../../../services/security/authentication.service';

export const lazyAuthGuardGuard: CanMatchFn = (route, state) => {
  const authenticationService = inject(AuthenticationService);
  const routerService = inject(Router);

  if (authenticationService.isLogged()) {
    return true;
  }

  routerService.navigateByUrl('/unauthorized');
  return false;
};
