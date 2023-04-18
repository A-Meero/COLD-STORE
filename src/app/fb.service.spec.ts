import { TestBed } from '@angular/core/testing';

import { FBService } from './fb.service';

describe('FBService', () => {
  let service: FBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
