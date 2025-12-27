import { TestBed } from '@angular/core/testing';

import { SittersService } from './sitters-service';

describe('SittersService', () => {
  let service: SittersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SittersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
