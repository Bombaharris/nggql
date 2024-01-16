import { TestBed } from '@angular/core/testing';

import { FormControl, FormGroup } from '@angular/forms';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { DocumentNode } from 'graphql';
import { CreateSkillsDocument, CreateSkillsMutation, SkillsDocument, SkillsQuery, SkillsWithLimitDocument } from '../generated/graphql';
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
      done();
    });
    TestBed.inject(ApolloTestingController).expectOne(query).flush(mockSkills);
    apolloController.verify();
  });

  it('fetch more values of skills with limit and offset', (done) => {
    const query: DocumentNode = SkillsWithLimitDocument;
    const key = 'skills';

    const mockSkills = {
      data: {
        [key]: [
          {
            "id": "1",
            "name": "Angular",
          },
          {
            "id": "2",
            "name": "Angular2",
          },
          {
            "id": "3",
            "name": "Angular3",
          },
          {
            "id": "4",
            "name": "Angular4",
          },
          {
            "id": "5",
            "name": "Angular5",
          }, 
          {
            "id": "7",
            "name": "Angular7",
          }, 
          {
            "id": "8",
            "name": "Angular8",
          }, 
          {
            "id": "9",
            "name": "Angular9",
          }, 
          {
            "id": "10",
            "name": "Angular10",
          }, 
          {
            "id": "11",
            "name": "Angular11",
          }, 
          {
            "id": "12",
            "name": "Angular12",
          },

        ],
        skillsAggregate:{
          count:12
        }
      },
     
    };

    service.skillsQueryRef?.fetchMore({variables:{options:{limit: 10, offset:0}}}).then((skills) => {
      expect(skills.data.skills).toEqual(mockSkills.data[key])
      done();
    })
      
    TestBed.inject(ApolloTestingController).expectOne(query).flush(mockSkills);
    apolloController.verify();
  });

  it('submits skill to a list', (done) => {

    const skill: FormGroup<SkillForm> = new FormGroup({
      name: new FormControl("AnotherSkill"),
    });
    const name = skill.get('name')?.value;
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

    service.submitSkill<CreateSkillsMutation>(name).subscribe(r => {
      expect(r.data?.createSkills.skills[0].name).toEqual(createSkill.data.createSkills.skills[0].name);
      done();
    });

    apolloController.expectOne(CreateSkillsDocument).flush(createSkill);
    apolloController.verify();
  })


});
