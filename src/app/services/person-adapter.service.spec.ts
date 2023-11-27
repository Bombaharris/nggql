import { TestBed } from '@angular/core/testing';

import { PersonAdapterService } from './person-adapter.service';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

describe('PersonAdapterService', () => {
  let service: PersonAdapterService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonAdapterService],
      imports: [ApolloTestingModule],
    });
    service = TestBed.inject(PersonAdapterService);
    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
