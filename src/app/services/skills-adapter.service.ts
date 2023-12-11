import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { SkillsDocument, SkillsQuery } from '../generated/graphql';
import { ApolloClientService } from './apollo-client.service';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsAdapterService extends ApolloClientService {
  skills!: SkillsQuery['skills'];
  constructor(apollo: Apollo) {
    super(apollo);
   }

   fetch(): Observable<SkillsQuery['skills']> {
    const data = super.fetchValues<SkillsQuery>(SkillsDocument, 'skills');
    data.subscribe(skills => this.skills = skills);
    return data;
  }
}
