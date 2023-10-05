/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { QLFilterBuilderService } from './ql-filter-builder.service';
const whereVariable = {
  where: {
    AND: [
      {
        projects_SOME: {
          id: 1
        }
      }
    ]
  }
};
const whereVariables = {
  where: {
    AND: [
      {
        projects_SOME: {
          id: 2
        }
      },
      {
        projects_SOME: {
          id: 3
        }
      }
    ]
  }
};
const whereVariablesComined = {
  where: {
    AND: [
      {
        projects_SOME: {
          id: 1
        }
      },
      {
        projects_SOME: {
          id: 2
        }
      },
      {
        projects_SOME: {
          id: 3
        }
      }
    ]
  }
};
const whereVariableCleared = {
  where: {
    AND: []
  }
};

describe('Service: QLFilterBuilder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QLFilterBuilderService]
    });
  });

  describe('andWhere', () => {
    it('string or number', inject([QLFilterBuilderService], (service: QLFilterBuilderService) => {
      service.andWhere('projects_SOME','id', 1);
      expect(service.getVariables()).toEqual(whereVariable);
    }));

    it('array', inject([QLFilterBuilderService], (service: QLFilterBuilderService) => {
      service.andWhere('projects_SOME','id', [2,3]);
      expect(service.getVariables()).toEqual(whereVariables);
    }));

    it('combined', inject([QLFilterBuilderService], (service: QLFilterBuilderService) => {
      service.andWhere('projects_SOME','id', 1);
      service.andWhere('projects_SOME','id', [2,3]);
      expect(service.getVariables()).toEqual(whereVariablesComined);
    }));
  });

  describe('clear', () => {
    it('string or number', inject([QLFilterBuilderService], (service: QLFilterBuilderService) => {
      service.andWhere('projects_SOME','id', 1);
      service.clearAndWhere();
      expect(service.getVariables()).toEqual(whereVariableCleared);
    }));
  });
});
