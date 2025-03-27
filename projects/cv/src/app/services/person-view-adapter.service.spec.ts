import { TestBed } from '@angular/core/testing';

import { PersonViewAdapterService } from './person-view-adapter.service';

describe('PersonViewAdapterService', () => {
  let service: PersonViewAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonViewAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
