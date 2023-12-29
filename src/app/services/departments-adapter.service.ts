import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Apollo, MutationResult, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { CreateDepartmentsDocument, DeleteDepartmentsDocument, DeleteDepartmentsMutation, DepartmentPartFragment, DepartmentsDetailsDocument, DepartmentsDetailsGQL, DepartmentsDetailsQuery, Exact, UpdateDepartmentsDocument, UpdateDepartmentsMutation } from '../generated/graphql';
import { ApolloClientService } from './apollo-client.service';
import { QLFilterBuilderService } from './ql-filter-builder.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsAdapterService extends ApolloClientService {
  departments!: DepartmentPartFragment[];
  departmentsQueryRef: QueryRef<DepartmentsDetailsQuery, Exact<{ [key: string]: never; }>> | undefined = undefined;
  editedDepartment: DepartmentPartFragment | null = null;

  constructor(apollo: Apollo, private dGQL: DepartmentsDetailsGQL, private qlFilterService: QLFilterBuilderService) {
    super(apollo);
    this.departmentsQueryRef = this.dGQL.watch({}, {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all'
    });
   }

  fetch(): Observable<DepartmentsDetailsQuery['departments']>  {
    const data = super.fetchValues<DepartmentsDetailsQuery>(DepartmentsDetailsDocument, 'departments');
    data.subscribe(departments => this.departments = departments);
    return data;
   }

  setEditedDepartment(department: DepartmentPartFragment | null): void {
    this.editedDepartment = department;
  }

  submitDepartment<T>($event: AbstractControl<any, any>, departmentId?: string, ): Observable<MutationResult<T>> {
      const department = $event;
      const input: any = {
        name: department.get('name')?.value,
        manager: {
          connect: this.qlFilterService.connectWhere('id', department.get('manager')?.value, true),
        }
      };
      
      const mutation = !departmentId ? CreateDepartmentsDocument : UpdateDepartmentsDocument;
      const variables = !departmentId ? { input } : { where: { id: departmentId }, update: input };
      if (!departmentId) {
        // Create a new person
        return super._apollo.mutate<T>({
          mutation,
          variables
        });
      } else {
        input.manager.disconnect = this.qlFilterService.connectWhere('id_NOT_IN', '', true);
        // Update an existing department
        return super._apollo.mutate<T>({
          mutation,
          variables
        });
      }
  }

  removeDepartment(id: string): Observable<MutationResult<DeleteDepartmentsMutation>> {
      return super._apollo.mutate<DeleteDepartmentsMutation>({mutation: DeleteDepartmentsDocument, variables:{where: {id: id}}});
  }

  managePersonsInDepartment(personsIds: string[], department: DepartmentPartFragment, exisitingIds: string[], remove: boolean = false): Observable<MutationResult<UpdateDepartmentsMutation>> {
    const input: any = {
      name: department.name,
      manager: {
        connect: this.qlFilterService.connectWhere('id', department.manager?.id, true),
      },
      persons: {
        connect: this.qlFilterService.connectWhere('id', remove ? exisitingIds.filter(x => !personsIds.includes(x)) : personsIds.concat(exisitingIds)),
        disconnect: this.qlFilterService.connectWhere('id_NOT_IN', '')
      }
    };
    const variables = { where: { id: department.id }, update: input };
    return super._apollo.mutate<UpdateDepartmentsMutation>({mutation: UpdateDepartmentsDocument, variables});
  }
}
