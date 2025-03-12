export interface ExperienceItem {
  title: string;
  subtitle?: string;
  description?: string | null;
  skills?: string[];
}

const defaultDescriptionFactory = <T extends Record<'description', string>>(
  item: T,
) => item.description;

const defaultSkillsFactory = <
  T extends Record<'skills', Record<'name', string>[]>,
>(
  item: T,
) => item.skills.map((skill) => skill.name);

export class ExperienceSectionBuilder<T extends Record<string, any>> {
  private createTitle?: (item: T) => string | null | undefined;
  private createSubtitle?: (item: T) => string;
  private createDescription?: (item: T) => string | null | undefined;
  private createSkills?: (item: T) => string[];

  constructor(private source: T[]) {}

  title(callback: (item: T) => string | null | undefined): this {
    this.createTitle = callback;
    return this;
  }
  subtitle(callback: (item: T) => string): this {
    this.createSubtitle = callback;
    return this;
  }
  description(
    callback: (
      item: T,
    ) => string | null | undefined = defaultDescriptionFactory,
  ): this {
    this.createDescription = callback;
    return this;
  }
  skills(callback: (item: T) => string[] = defaultSkillsFactory): this {
    this.createSkills = callback;
    return this;
  }

  build(): ExperienceItem[] {
    return this.source.map((item) => ({
      title: this.createTitle?.(item) ?? '',
      subtitle: this.createSubtitle?.(item),
      description: this.createDescription?.(item),
      skills: this.createSkills?.(item),
    }));
  }
}
