import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { Subscription } from 'rxjs';
import { DepartmentPartFragment, PersonWithAllTypeFragment } from 'src/app/generated/graphql';
import { DepartmentsAdapterService } from 'src/app/services/departments-adapter.service';
import { PersonAdapterService } from 'src/app/services/person-adapter.service';
import { TransferChangeReturn } from './model/department-transfer.model';

@Component({
  selector: 'app-department-transfer',
  templateUrl: './department-transfer.component.html',
  styleUrl: './department-transfer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentTransferComponent implements OnInit, OnDestroy {
  list!: TransferItem[];
  isLoading: boolean = false;
  departmentId: string | undefined = undefined;
  department!: DepartmentPartFragment;
  departmentsEmployeesIds: string[] = [];
  readonly subscription: Subscription = new Subscription();
  
  constructor(private cdr: ChangeDetectorRef,private personAdapterService: PersonAdapterService, private departmentsAdapterService: DepartmentsAdapterService, private route: ActivatedRoute, private notification: NzNotificationService) {
     this.subscription.add(
        this.route.params.subscribe(params => {
          this.departmentId = params['departmentId'];
        })
      );
    this.subscription.add( 
      this.departmentsAdapterService.departmentsQueryRef?.valueChanges.subscribe(({data, errors, loading}) => {
      if(errors) {
        errors.map(e => console.error(e));
        this.isLoading = false;
      }
      if(loading) {
        this.isLoading = loading;
      }
      this.department = data.departments.filter(department => department.id === this.departmentId)[0];
      this.isLoading = false;
    }))

    this.subscription.add(
      this.personAdapterService?.personsQueryRef?.valueChanges.subscribe(({ data, loading, errors }) => {
        if(loading) {
          this.isLoading = loading;
        }
        if(errors) {
          errors.map(e => console.error(e));
          this.isLoading = false;
        }
        if(data && data.people) {
          this.setTransferList(data.people);
          this.isLoading = false;
        }
      })
    )
      
    }
    
    ngOnInit(): void {
      this.isLoading = true;
      this.departmentsAdapterService.departmentsQueryRef?.valueChanges.subscribe(({data, errors, loading}) => {
        if(errors) {
          errors.map(e => console.error(e));
          this.isLoading = false;
        }
        if(loading) {
          this.isLoading = loading;
        }
        this.department = data.departments.filter(department => department.id === this.departmentId)[0];
        this.isLoading = false;
      })

      this.personAdapterService?.personsQueryRef?.valueChanges.subscribe(({ data, loading, errors }) => {
        if(loading) {
          this.isLoading = loading;
        }
        if(errors) {
          errors.map(e => console.error(e));
          this.isLoading = false;
        }
        if(data && data.people) {
          this.setTransferList(data.people);
          this.isLoading = false;
        }
      })
    }

    get departmentName() {
      return this.department?.name ?? 'department';
    }

  setTransferList(people: PersonWithAllTypeFragment[] | null): void {
    if(!people) return;
    const peopleList: Array<TransferItem>  = [];
    people.map(person => {
      if(!peopleList.find(p => p.key === person.id)) {
        peopleList.push({
          key: person.id,
          title:person.name + " " + person.surname,
          direction: person.departments.find(d => d.id === this.departmentId) ? 'right' : 'left',
        })
      }
    })
    this.list = [...peopleList];
    this.departmentsEmployeesIds = [...peopleList.filter(p => p.direction === 'right').map(e => e.key)];
    this.cdr.detectChanges();
  }
  
  filterOption(inputValue: string, item: TransferItem): boolean {
    return item.title.toLocaleLowerCase().indexOf(inputValue.toLocaleLowerCase()) > -1;
  }

  change(ret: TransferChangeReturn): void {
     const ids = ret.list.map((item) => item.key as string);
     const users = ret.list.map(i => i.title);
     this.isLoading = true;
     if(ret.from === 'right' && ret.to === 'left') {
      this.departmentsAdapterService.managePersonsInDepartment(ids, this.department, this.departmentsEmployeesIds, true).subscribe(({errors, loading}) => {
        if(loading) {
          this.isLoading = loading
        }
        if(errors) {
          errors.map((error) => {console.error(error)});
        }
        this.notification.create( 
          'success',
          'Success',
          `Users ${users.map(u => u)} were successfully removed from the department.`)
        });
        this.departmentsEmployeesIds = this.departmentsEmployeesIds.filter(x => !ids.includes(x));
        this.departmentsAdapterService.departmentsQueryRef?.refetch();
      this.isLoading = false;
      return;
     }
    this.departmentsAdapterService.managePersonsInDepartment(ids, this.department, this.departmentsEmployeesIds).subscribe(({errors, loading}) => {
      if(loading) {
        this.isLoading = loading
      }
      if(errors) {
        errors.map((error) => {console.error(error)});
      }
      ids.map((id) => this.departmentsEmployeesIds.push(id));
      this.notification.create( 
        'success',
        'Success',
        `Users ${users} were successfully added to the ${this.department?.name ?? ''} department.`)
      });
      this.departmentsAdapterService.departmentsQueryRef?.refetch();
      this.isLoading = false;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
