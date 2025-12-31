import { TestBed } from '@angular/core/testing';

import { OwnerRequestsService } from './owner-requests-service';

describe('OwnerRequestsService', () => {
  let service: OwnerRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
