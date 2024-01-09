import { TestBed } from '@angular/core/testing';

import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { DocumentNode } from 'graphql';
import { CreateSkillsDocument, CreateSkillsMutation, SkillsDocument, SkillsQuery } from '../generated/graphql';
import { SkillsAdapterService } from './skills-adapter.service';
import { SkillForm } from '../skills/skills-form/models/skill-form.model';
import { FormGroup, FormControl } from '@angular/forms';

describe('RolesAdapterService', () => {
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
  
  it('fetchValues of skills', (done) => {
    const query: DocumentNode = SkillsDocument;
    const key = 'skills';

    const mockSkills = {
          data: {
          [key]: [
                {
                    "id": "1",
                    "name": "Angular",
                },
            ]
        }
      };
     
      service.fetchValues<SkillsQuery>(query, key).subscribe((result: SkillsQuery['skills']) => {
      expect(result).toEqual(mockSkills.data[key]);
    });
    done();
    TestBed.inject(ApolloTestingController).expectOne(query).flush(mockSkills);
  });

  it('submits skill to a list', (done) => {

    const skill: FormGroup<SkillForm> = new FormGroup({
      name: new FormControl("AnotherSkill"),
    });

      const createSkill = {
        data: {
          createSkills: {
            skills: [
              {
                name: '"AnotherSkill"',
              },
            ],
          },
        }, loading: false, error: null,
      };
     
      service.submitSkill<CreateSkillsMutation>(skill).subscribe(r => {
        expect(r.data?.createSkills.skills[0].name).toEqual(createSkill.data.createSkills.skills[0].name);
        done();
      });
  
      apolloController.expectOne(CreateSkillsDocument).flush(createSkill);
      apolloController.verify();
  })


});
