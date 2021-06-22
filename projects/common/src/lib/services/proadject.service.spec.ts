import { TestBed } from '@angular/core/testing';

import { ProadjectService } from './proadject.service';

describe('IotEnsembleService', () => {
  let service: ProadjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProadjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
