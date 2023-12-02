import { TestBed } from '@angular/core/testing';

import { CvillegasBackendService } from './cvillegas-backend.service';

describe('CvillegasBackendService', () => {
  let service: CvillegasBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvillegasBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
