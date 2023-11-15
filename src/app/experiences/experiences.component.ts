import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonsWithAllGQL, DeletePersonsGQL, ProjectsWithAllGQL, SkillsGQL, RolesGQL, DepartmentsGQL, DepartmentsQuery, Exact, InputMaybe, PersonWhere, PersonWithAllTypeFragment, PersonsWithAllQuery } from '../generated/graphql';
import { QLFilterBuilderService } from '../services/ql-filter-builder.service';
import { QueryRef } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  isLoading: boolean = false;
  expandSet = new Set<string>();
  people!: PersonWithAllTypeFragment[];
  editedPerson!: PersonWithAllTypeFragment | null | undefined;
  queryRef: QueryRef<PersonsWithAllQuery, Exact<{ where?: InputMaybe<PersonWhere> | undefined; }>>;
  readonly subscription: Subscription = new Subscription();

  constructor(
    private pGQL: PersonsWithAllGQL, private route: ActivatedRoute,
  ) { 
    this.queryRef = this.pGQL.watch({}, {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all'
    });

    this.subscription.add(
      this.queryRef.valueChanges.subscribe(({ data, loading, errors }) => {
        if(loading) {
          this.isLoading = loading;
        }
        if(errors) {
          errors.map(e => console.error(e));
          this.isLoading = false;
        }
        if(data && data.people) {
          this.people = data.people;
          this.editedPerson = this.people.find(p => p.id === this.route.snapshot.paramMap.get("id"))
          this.isLoading = false;
        }
      })
    );
    
  }

  ngOnInit(): void {
  }

}
