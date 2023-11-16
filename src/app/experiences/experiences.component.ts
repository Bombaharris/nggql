import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonsWithAllGQL, DeletePersonsGQL, ProjectsWithAllGQL, SkillsGQL, RolesGQL, DepartmentsGQL, DepartmentsQuery, Exact, InputMaybe, PersonWhere, PersonWithAllTypeFragment, PersonsWithAllQuery } from '../generated/graphql';
import { QLFilterBuilderService } from '../services/ql-filter-builder.service';
import { QueryRef } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  expandSet = new Set<string>();
  people!: PersonWithAllTypeFragment[];
  editedPerson!: PersonWithAllTypeFragment | null | undefined;
  queryRef: QueryRef<PersonsWithAllQuery, Exact<{ where?: InputMaybe<PersonWhere> | undefined; }>> | undefined = undefined;
  readonly subscription: Subscription = new Subscription();
  readonly routeSub: Subscription = new Subscription();
  id: string | undefined = '';
  
  constructor(
    private pGQL: PersonsWithAllGQL, private route: ActivatedRoute,
  ) { 
    this.routeSub.add(
      this.route.params.subscribe(params => {
      this.id = params['id'];
    }))
    this.queryRef = this.pGQL.watch({where:{id: this.id}}, {
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
          this.editedPerson = this.people.find(p => p.id === this.id);
          this.isLoading = false;
        }
      })
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
    this.subscription.unsubscribe();
  }

}
