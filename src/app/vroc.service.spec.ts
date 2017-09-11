import { TestBed, inject } from '@angular/core/testing';

import { VrocService } from './vroc.service';

describe('VrocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VrocService]
    });
  });

  it('should be created', inject([VrocService], (service: VrocService) => {
    expect(service).toBeTruthy();
  }));
});
