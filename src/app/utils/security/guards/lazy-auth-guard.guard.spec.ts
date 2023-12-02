import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { lazyAuthGuardGuard } from './lazy-auth-guard.guard';

describe('lazyAuthGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => lazyAuthGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
