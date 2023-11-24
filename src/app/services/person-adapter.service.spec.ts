import { TestBed } from '@angular/core/testing';

import { PersonAdapterService } from './person-adapter.service';

describe('PersonAdapterService', () => {
  let service: PersonAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
