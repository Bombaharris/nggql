import { TestBed } from '@angular/core/testing';

import { FormControl, FormGroup } from '@angular/forms';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';
import { DocumentNode } from 'graphql';
import {
  CreateSkillGroupsDocument,
  CreateSkillsDocument,
  DeleteSkillGroupsDocument,
  DeleteSkillsDocument,
  FindSkillDocument,
  SkillsDocument,
  SkillsQuery,
  SkillsTreeDocument,
  SkillsWithLimitDocument,
  UpdateSkillDocument,
  UpdateSkillGroupsDocument,
} from '../generated/graphql';
import { SkillForm } from '../skills/skills-form/models/skill-form.model';
import { SkillsAdapterService } from './skills-adapter.service';
import { QLFilterBuilderService } from './ql-filter-builder.service';

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
      const mockData = {
        data: {
          createSkills: {
            info: {
              nodesCreated: 1,
              relationshipsCreated: 0,
            },
            skills: {
              id: 'test',
              name: 'test',
            },
          },
        },
      };

      service.createSkill('test').subscribe(({ data }) => {
        expect(data?.createSkills.info.nodesCreated).toEqual(1);
        done();
      });

      const existsOperation = apolloController.expectOne(FindSkillDocument);
      existsOperation.flush({
        data: { findSkill: [] },
      });

      setTimeout(() => {
        const createOperation =
          apolloController.expectOne(CreateSkillsDocument);
        createOperation.flush(mockData);
        apolloController.verify();
      }, 0);
    });
    it('should not create skill', (done) => {
      service.createSkill('test').subscribe({
        error: (error) => {
          expect(error).toBeDefined();
          done();
        },
      });

      apolloController.expectOne(FindSkillDocument).flush({
        data: { findSkill: [{ id: 'test', name: 'test' }] },
      });
      apolloController.verify();
    });
    it('should update skill name', (done) => {
      const mockData = {
        data: {
          updateSkills: {
            skills: [{ id: 'test', name: 'test2' }],
          },
        },
      };

      service.updateSkill('test', { name: 'test2' }).subscribe(({ data }) => {
        expect(data?.updateSkills.skills[0].name).toEqual('test2');
        done();
      });

      apolloController.expectOne(UpdateSkillDocument).flush(mockData);
      apolloController.verify();
    });
    it('should update skill assignment', (done) => {
      const qlFilterBuilder = TestBed.inject(QLFilterBuilderService);
      const mockData = {
        data: {
          updateSkillGroups: {
            info: {
              relationshipsCreated: 1,
            },
          },
        },
      };

      service
        .updateAssignmentToParents(
          'Skill',
          'test',
          ['old group'],
          ['new group'],
        )
        .subscribe(({ data }) => {
          expect(data?.updateSkillGroups.info.relationshipsCreated).toEqual(1);
          done();
        });

      const [connectQuery, disconnectQuery] = apolloController.match(
        UpdateSkillGroupsDocument,
      );
      expect(connectQuery.operation.variables.where.id_IN).toEqual([
        'new group',
      ]);
      expect(
        connectQuery.operation.variables.update.children.Skill.connect,
      ).toEqual(qlFilterBuilder.connectWhere('id', 'test'));
      connectQuery.flush(mockData);

      expect(disconnectQuery.operation.variables.where.id_IN).toEqual([
        'old group',
      ]);
      expect(
        disconnectQuery.operation.variables.update.children.Skill.disconnect,
      ).toEqual(qlFilterBuilder.connectWhere('id', 'test'));
      disconnectQuery.flush(mockData);
      apolloController.verify();
    });
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

  describe('test skill groups', () => {
    it('should create skill group', (done) => {
      const qlFilterService = TestBed.inject(QLFilterBuilderService);
      const input = {
        name: 'test',
        parents: ['parent'],
        children: ['children'],
      };
      const mockData = {
        data: {
          createSkillGroups: {
            info: {
              nodesCreated: 1,
            },
          },
        },
      };

      service
        .createGroup({
          name: input.name,
          parents: {
            // @ts-ignore
            connect: qlFilterService.connectWhere('id', input.parents),
          },
          children: {
            Skill: {
              // @ts-ignore
              connect: qlFilterService.connectWhere('id', input.children),
            },
            SkillGroup: {
              // @ts-ignore
              connect: qlFilterService.connectWhere('id', input.children),
            },
          },
        })
        .subscribe(({ data }) => {
          expect(data?.createSkillGroups.info.nodesCreated).toEqual(1);
          done();
        });

      const existsOperation = apolloController.expectOne(FindSkillDocument);
      existsOperation.flush({
        data: { findSkill: [] },
      });

      setTimeout(() => {
        const createOperation = apolloController.expectOne(
          CreateSkillGroupsDocument,
        );
        createOperation.flush(mockData);
        apolloController.verify();
      }, 0);
    });
    it('should update skill group', (done) => {
      const mockData = {
        data: {
          updateSkillGroups: {
            skillGroups: [{ id: 'test', name: 'test2' }],
          },
        },
      };

      service.updateGroup('test', { name: 'test2' }).subscribe(({ data }) => {
        expect(data?.updateSkillGroups.skillGroups[0].name).toEqual('test2');
        done();
      });

      apolloController.expectOne(UpdateSkillGroupsDocument).flush(mockData);
      apolloController.verify();
    });
    it('should delete skill group', (done) => {
      const mockData = {
        data: {
          deleteSkillGroups: {
            nodesDeleted: 1,
          },
        },
      };

      service.deleteGroup('test').subscribe(({ data }) => {
        expect(data?.deleteSkillGroups.nodesDeleted).toEqual(1);
        done();
      });

      const op = apolloController.expectOne(DeleteSkillGroupsDocument);

      expect(op.operation.variables.where.id).toEqual('test');

      op.flush(mockData);
      apolloController.verify();
    });
  });
});
