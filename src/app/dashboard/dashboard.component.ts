
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DepartmentsGQL, DepartmentsQuery, Exact, InputMaybe, PersonWhere, PersonsWithAllGQL, PersonsWithAllQuery, ProjectsWithAllGQL, ProjectsWithAllQuery, RolesGQL, RolesQuery, SkillsGQL, SkillsQuery } from '../generated/graphql';
import { QueryRef } from 'apollo-angular';
import { QLFilterBuilderService } from '../services/ql-filter-builder.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  isEmpty: boolean = false;
  isLoading: boolean = false;
  people!: PersonsWithAllQuery['people'];
  queryRef: QueryRef<PersonsWithAllQuery, Exact<{ where?: InputMaybe<PersonWhere> | undefined; }>>;
  deps$: Observable<DepartmentsQuery['departments']>;
  projects$: Observable<ProjectsWithAllQuery['projects']>;
  skills$: Observable<SkillsQuery['skills']>;
  roles$: Observable<RolesQuery['roles']>;
  filterForm = new FormGroup({
    deps: new FormControl(),
    projects: new FormControl(),
    skills: new FormControl(),
    roles: new FormControl()
  });
  readonly subscription: Subscription = new Subscription();

  constructor(
    private qlFilterService: QLFilterBuilderService,
    private pGQL: PersonsWithAllGQL,
    private prGQL: ProjectsWithAllGQL,
    private sGQL: SkillsGQL,
    private rGQL: RolesGQL,
    private dGQL: DepartmentsGQL
  ) {
    this.queryRef = this.pGQL.watch({}, {
      fetchPolicy: 'cache-and-network'
    });

    this.subscription.add(
      this.queryRef.valueChanges.subscribe(({ data, loading }) => {
        this.isLoading = loading;
        this.people = data.people;
        this.isEmpty = data.people.length <= 0;
      })
    );

    this.deps$ = this.dGQL.watch().valueChanges
      .pipe(
        map((result) => result.data.departments)
      );
    this.projects$ = this.prGQL.watch().valueChanges
      .pipe(
        map((result) => result.data.projects)
      );
    this.skills$ = this.sGQL.watch().valueChanges
      .pipe(
        map((result) => result.data.skills)
      );
    this.roles$ = this.rGQL.watch().valueChanges
      .pipe(
        map((result) => result.data.roles)
      );
  }

  ngOnInit(): void {
    this.subscription.add(
      this.filterForm.valueChanges.subscribe((values) => {
        this.qlFilterService.clearAndWhere();
        this.qlFilterService.andWhere('projects_SOME','id', values.projects);
        this.qlFilterService.andWhere('skills_SOME','id', values.skills);
        this.qlFilterService.andWhere('roles_SOME','id', values.roles);
        this.queryRef.refetch(this.qlFilterService.getVariables());
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
