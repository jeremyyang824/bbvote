import { TestBed, inject } from '@angular/core/testing';

import { ExpectService } from './expect.service';

describe('ExpectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpectService]
    });
  });

  it('should be created', inject([ExpectService], (service: ExpectService) => {
    expect(service).toBeTruthy();
  }));
});
