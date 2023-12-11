import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable, Subscription } from 'rxjs';
import { PersonAdapterService } from 'src/app/services/person-adapter.service';
import { DeletePersonsDocument, DeletePersonsMutation, DepartmentsQuery, PersonWithAllTypeFragment, ProjectsWithAllQuery, RolesDocument, RolesQuery, SkillsQuery } from '../generated/graphql';
import { DepartmentsAdapterService } from '../services/departments-adapter.service';
import { QLFilterBuilderService } from '../services/ql-filter-builder.service';
import { RolesAdapterService } from '../services/roles-adapter.service';
import { SkillsAdapterService } from '../services/skills-adapter.service';
import { ProjectsAdapterService } from './../services/projects-adapter.service';

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
  departments!: Observable<DepartmentsQuery['departments']>;
  projects!: Observable<ProjectsWithAllQuery['projects']>;
  skills!: Observable<SkillsQuery['skills']>;
  roles!: Observable<RolesQuery['roles']>;
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
    private departmentsAdapterService: DepartmentsAdapterService,
    private personAdapterService: PersonAdapterService,
    private rolesAdapterService: RolesAdapterService,
    private projectsAdapterService: ProjectsAdapterService,
    private skillsAdapterService: SkillsAdapterService,
    private notification: NzNotificationService
  ) {
    this.subscription.add(
      this.personAdapterService.personsQueryRef?.valueChanges.subscribe(({ data, loading, errors }) => {
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
     
    this.departments = this.departmentsAdapterService.fetch();
    this.projects = this.projectsAdapterService.fetch();
    this.skills = this.skillsAdapterService.fetch();
    this.roles = this.rolesAdapterService.fetch();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.filterForm.valueChanges.subscribe((values) => {
        this.qlFilterService.clearAndWhere();
        this.qlFilterService.andWhere('projects_SOME','id', values.projects);
        this.qlFilterService.andWhere('skills_SOME','id', values.skills);
        this.qlFilterService.andWhere('roles_SOME','id', values.roles);
        this.personAdapterService.personsQueryRef?.refetch(this.qlFilterService.getVariables());
      })
    );
  }

  
  removePerson(person: PersonWithAllTypeFragment): void {
    this.isConfirmModal = true;
    this.personAdapterService.removePerson<DeletePersonsMutation>(person.id, DeletePersonsDocument).subscribe(
      () => {
        this.personAdapterService.personsQueryRef?.refetch();
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
      if(person) {
        this.editedPerson = person;
        this.personAdapterService.setEditedPerson(person);
      }
    }

    closeForm(refetch?: boolean | undefined): void {
      if(refetch) {
        this.personAdapterService.personsQueryRef?.refetch();
        this.notification.create(
          'success',
          'Success',
          `User ${this.editedPerson?.name} ${this.editedPerson?.surname} was successfully ${this.editedPerson?.id ? 'edited' : 'created'}.`
        );
      }
      this.isFormVisible = false;
      this.currentForm = null;
      this.editedPerson = null;
      this.personAdapterService.setEditedPerson(null);
    }

    errorHandler(error: any): void {
      this.notification.create(
        'error',
        'Error',
        `${error}`
      )
    }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
