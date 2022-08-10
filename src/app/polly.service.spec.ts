import { TestBed } from '@angular/core/testing';

import { PollyService } from './polly.service';

describe('PollyService', () => {
  let service: PollyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PollyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
