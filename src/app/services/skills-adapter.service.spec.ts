import { TestBed } from '@angular/core/testing';

import { FormControl, FormGroup } from '@angular/forms';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';
import { DocumentNode } from 'graphql';
import {
  CreateSkillsDocument,
  DeleteSkillsDocument,
  FindSkillDocument,
  SkillsDocument,
  SkillsQuery,
  SkillsTreeDocument,
  SkillsWithLimitDocument,
} from '../generated/graphql';
import { SkillForm } from '../skills/skills-form/models/skill-form.model';
import { SkillsAdapterService } from './skills-adapter.service';

describe('SkillsAdapterService', () => {
  let service: SkillsAdapterService;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [SkillsAdapterService],
    });
    service = TestBed.inject(SkillsAdapterService);
    apolloController = TestBed.inject(ApolloTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    apolloController.verify();
  });

  it('should get skills tree', (done) => {
    const query: DocumentNode = SkillsTreeDocument;

    service.skillsTreeQueryRef.valueChanges.subscribe(({ data }) => {
      expect(data.skillGroups).toHaveSize(1);
      done();
    });

    const operation = apolloController.expectOne(query);

    expect(operation.operation.variables.where.parentsAggregate.count).toEqual(
      0,
    );
    operation.flush({
      data: {
        skillGroups: [{}],
      },
    });
    apolloController.verify();
  });

  describe('test skills', () => {
    it('should return all skills', (done) => {
      const mockData = {
        data: {
          skills: [{ id: 1, name: 'Skill' }],
        },
      };

      service.getAllSkills()?.subscribe((data) => {
        // @ts-ignore
        expect(data).toEqual(mockData.data.skills);
        done();
      });

      apolloController.expectOne(SkillsWithLimitDocument).flush(mockData);
      apolloController.verify();
    });
    it('should find skill', (done) => {
      const mockData = {
        data: {
          findSkill: [{ id: 1, name: 'test' }],
        },
      };

      service.findSkill('test').subscribe(({ data }) => {
        // @ts-ignore
        expect(data.findSkill).toEqual(mockData.data.findSkill);
        done();
      });

      apolloController.expectOne(FindSkillDocument).flush(mockData);
      apolloController.verify();
    });
    it('should return true if skill exists', (done) => {
      const mockData = {
        data: {
          findSkill: [{ id: 1, name: 'test' }],
        },
      };

      service.checkSkillExists('test').subscribe((exists) => {
        expect(exists).toBeTruthy();
        done();
      });

      apolloController.expectOne(FindSkillDocument).flush(mockData);
      apolloController.verify();
    });

    it('should create skill', (done) => {
      // const mockData = {
      //   data: {
      //     createSkills: {
      //       info: {
      //         nodesCreated: 1,
      //         relationshipsCreated: 0,
      //       },
      //       skills: {
      //         id: 'test',
      //         name: 'test',
      //       },
      //     },
      //   },
      // };
      //
      // service.createSkill('test').subscribe(({ data }) => {
      //   expect(data?.createSkills.info.nodesCreated).toEqual(1);
      //   done();
      // });
      //
      // const existsOperation = apolloController.expectOne(FindSkillDocument);
      // existsOperation.flush({
      //   data: { findSkill: [] },
      // });
      //
      // const createOperation = apolloController.expectOne(CreateSkillsDocument);
      // createOperation.flush(mockData);
      //
      // apolloController.verify();
    });
    it('should not create skill', () => {});
    it('should update skill name', () => {});
    it('should update skill name and groups', () => {});
    it('should delete skill', (done) => {
      const mockData = {
        data: {
          deleteSkills: {
            nodesDeleted: 1,
          },
        },
      };

      service.deleteSkill('test').subscribe(({ data }) => {
        expect(data?.deleteSkills.nodesDeleted).toEqual(1);
        done();
      });

      const op = apolloController.expectOne(DeleteSkillsDocument);

      expect(op.operation.variables.where.id).toEqual('test');

      op.flush(mockData);
      apolloController.verify();
    });
  });

  describe('test skill groups', () => {});

});
