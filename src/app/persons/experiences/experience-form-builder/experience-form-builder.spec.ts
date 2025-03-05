import { ExperienceFormBuilder } from './experience-form-builder';
import { TestBed } from '@angular/core/testing';
import { FormArray, FormGroup } from '@angular/forms';
import { ExperienceType } from '../../../generated/graphql';

let service: ExperienceFormBuilder;

describe('test ExperienceFormBuilder', () => {
  beforeEach(() => {
    service = TestBed.configureTestingModule({
      providers: [ExperienceFormBuilder],
    }).inject(ExperienceFormBuilder);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return experiences field on experiencesField field', () => {
    expect(service.experiencesField).toBe(
      service.form.get('experiences') as FormArray,
    );
  });

  it('should add new group on add method', () => {
    service.add().add();

    expect((service.form.get('experiences') as FormArray).length).toBe(2);
  });

  it('should reuse last group on lastGroup field', () => {
    service.add().add();

    expect(service.lastGroup).toBe(service.experiencesField.at(-1) as FormGroup);
  });

  it('should add common fields to the form', () => {
    service.add().buildCommon();

    expect(service.lastGroup.get('gainedAt')).toBeDefined();
    expect(service.lastGroup.get('startedFrom')).toBeDefined();
    expect(service.lastGroup.get('skills')).toBeDefined();
  });

  it('should check if the field is visible', () => {
    service.add().buildCommon();

    expect(service.isVisible('gainedAt')).toBeTruthy();
    expect(service.isVisible('name')).toBeFalse();
  });

  it('should add name field to the form', () => {
    service.add().buildName();

    expect(service.lastGroup.get('name')).toBeDefined();
  });

  it('should add role field to the form', () => {
    service.add().buildRole();

    expect(service.lastGroup.get('role')).toBeDefined();
  });

  it('should add institution field to the form', () => {
    service.add().buildRole();

    expect(service.lastGroup.get('institution')).toBeDefined();
  });

  it('should add description field to the form', () => {
    service.add().buildRole();

    expect(service.lastGroup.get('description')).toBeDefined();
  });

  it('should build form by experience type', () => {
    const buildCommonSpy = spyOn(service, 'buildCommon');
    const buildRoleSpy = spyOn(service, 'buildRole');
    const buildInstitutionSpy = spyOn(service, 'buildInstitution');
    const buildDescriptionSpy = spyOn(service, 'buildDescription');

    service.add().buildByType(ExperienceType.Default);

    expect(buildCommonSpy).toHaveBeenCalled();
    expect(buildRoleSpy).toHaveBeenCalled();
    expect(buildInstitutionSpy).toHaveBeenCalled();
    expect(buildDescriptionSpy).toHaveBeenCalled();
  });
});
