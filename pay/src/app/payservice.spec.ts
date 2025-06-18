import { TestBed } from '@angular/core/testing';

import { Payservice } from './payservice';

describe('Payservice', () => {
  let service: Payservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Payservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
