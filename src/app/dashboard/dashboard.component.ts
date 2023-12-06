import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable, Subscription } from 'rxjs';
import { DeletePersonsDocument, DeletePersonsMutation, DepartmentsDocument, DepartmentsQuery, PersonWithAllTypeFragment, ProjectsWithAllDocument, ProjectsWithAllQuery, RolesDocument, RolesQuery, SkillsDocument, SkillsQuery } from '../generated/graphql';
import { DashboardApiService } from '../services/dashboard-api.service';
import { QLFilterBuilderService } from '../services/ql-filter-builder.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  isFormVisible = false;
  isLoading = false;
  currentForm: "person" | "rates" | null = null;
  expandSet = new Set<string>();
  people!: PersonWithAllTypeFragment[];
  editedPerson!: PersonWithAllTypeFragment | null;
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
  isConfirmModal: boolean = false;
  readonly subscription: Subscription = new Subscription();

  constructor(
    private qlFilterService: QLFilterBuilderService,
    private dashboardApiService: DashboardApiService,
    private notification: NzNotificationService
  ) {
    this.subscription.add(
      this.dashboardApiService.personsQueryRef.valueChanges.subscribe(({ data, loading, errors }) => {
        if(loading) {
          this.isLoading = loading;
        }
        if(errors) {
          errors.map(e => console.error(e));
          this.isLoading = false;
        }
        if(data && data.people) {
          this.people = data.people;
          this.isLoading = false;
        }
      })
    );
     
    this.deps$ = this.dashboardApiService.fetchValuesForSearchBar<DepartmentsQuery>(DepartmentsDocument, 'departments');
    this.projects$ = this.dashboardApiService.fetchValuesForSearchBar<ProjectsWithAllQuery>(ProjectsWithAllDocument, 'projects');
    this.skills$ = this.dashboardApiService.fetchValuesForSearchBar<SkillsQuery>(SkillsDocument, 'skills');
    this.roles$ = this.dashboardApiService.fetchValuesForSearchBar<RolesQuery>(RolesDocument, 'roles');
  }

  ngOnInit(): void {
    this.subscription.add(
      this.filterForm.valueChanges.subscribe((values) => {
        this.qlFilterService.clearAndWhere();
        this.qlFilterService.andWhere('projects_SOME','id', values.projects);
        this.qlFilterService.andWhere('skills_SOME','id', values.skills);
        this.qlFilterService.andWhere('roles_SOME','id', values.roles);
        this.dashboardApiService.personsQueryRef.refetch(this.qlFilterService.getVariables());
      })
    );
  }

  
  removePerson(person: PersonWithAllTypeFragment): void {
    this.isConfirmModal = true;
    this.dashboardApiService.removePerson<DeletePersonsMutation>(person.id, DeletePersonsDocument).subscribe(
      () => {
        this.dashboardApiService.personsQueryRef.refetch();
      }, 
      (error) => {
        this.notification.create(
        'error',
        'Error',
        `Error occured during removal: ${error}`
      )
    }, 
    () => {
      this.notification.create(
        'success',
        'Success',
        `${person.name} ${person.surname} was successfully removed.`
        )
      });
    }

    openForm(formType: "person" | "rates" | null, person?: PersonWithAllTypeFragment): void {
      this.isFormVisible = true;
      this.currentForm = formType;
      if(person) this.editedPerson = person;
    }

    closeForm(refetch?: boolean | undefined): void {
      this.isFormVisible = false;
      this.currentForm = null;
      this.editedPerson = null;
      if(refetch) this.dashboardApiService.personsQueryRef.refetch();
    }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
