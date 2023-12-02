import { CanActivateFn } from '@angular/router';

export const lazyAuthGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
