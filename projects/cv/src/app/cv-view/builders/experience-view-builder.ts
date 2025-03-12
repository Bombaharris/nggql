import {
  ExperienceItem,
  ExperienceSectionBuilder,
} from './experience-section-builder';
import { Injectable } from '@angular/core';

export interface ExperienceView {
  title: string;
  items: ExperienceItem[];
}

interface ExperienceViewTemplate {
  title: string;
  items: ExperienceSectionBuilder<any>;
}

@Injectable()
export class ExperienceViewBuilder {
  private data: ExperienceViewTemplate[] = [];

  add<T extends Record<string, any>>(
    title: string,
    dataSource: T[],
  ): ExperienceSectionBuilder<T> {
    const item = {
      title,
      items: new ExperienceSectionBuilder<T>(dataSource),
    };

    this.data.push(item);
    return item.items;
  }

  build(): ExperienceView[] {
    const result = this.data.map((item) => ({
      title: item.title,
      items: item.items.build(),
    }));

    this.data.length = 0;
    return result;
  }
}
