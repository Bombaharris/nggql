import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DepartmentsGQL, DepartmentsQuery, Exact, InputMaybe, Person, PersonWhere, PersonsWithAllGQL, PersonsWithAllQuery, ProjectsWithAllGQL, ProjectsWithAllQuery, RolesGQL, RolesQuery, SkillConnectInput, SkillsGQL, SkillsQuery } from '../generated/graphql';
import { QueryRef } from 'apollo-angular';
import { QLFilterBuilderService } from '../services/ql-filter-builder.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  isPersonFormVisible = false;
  isLoading = false;
  expandSet = new Set<string>();
  people!: PersonsWithAllQuery['people'];
  editedPerson!: Person | any;
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
    private dGQL: DepartmentsGQL,
    private notification: NzNotificationService
  ) {
    this.queryRef = this.pGQL.watch({}, {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all'
    });

    this.subscription.add(
      this.queryRef.valueChanges.subscribe(({ data, loading }) => {
        this.isLoading = loading;
        this.people = data.people;
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

  openPersonForm(person?: Person | any): void {
    this.isPersonFormVisible = true;
    this.editedPerson = person;
  }

  closePersonForm(): void {
    this.isPersonFormVisible = false;
  }

  closePersonFormWithRefetch(): void {
    this.isPersonFormVisible = false;
    this.queryRef.refetch();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
