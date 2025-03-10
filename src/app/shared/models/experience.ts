import {
  DefaultExperienceFragment,
  EducationOrCourseExperienceFragment,
  HobbyExperienceFragment,
  ProjectExperienceFragment,
} from '../../generated/graphql';

export type Experience =
  | DefaultExperienceFragment
  | ProjectExperienceFragment
  | EducationOrCourseExperienceFragment
  | HobbyExperienceFragment;
