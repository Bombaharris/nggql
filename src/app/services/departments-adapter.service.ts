import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { DepartmentWhere, DepartmentsDocument, DepartmentsGQL, DepartmentsQuery, Exact, InputMaybe } from '../generated/graphql';
import { ApolloClientService } from './apollo-client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsAdapterService extends ApolloClientService {
  departments!: DepartmentsQuery['departments'];
  departmentsQueryRef: QueryRef<DepartmentsQuery, Exact<{ [key: string]: never; }>> | undefined = undefined;
  editedDepartment: DepartmentsQuery['departments'] | null = null;

  constructor(apollo: Apollo, private dGQL: DepartmentsGQL) {
    super(apollo);
    this.departmentsQueryRef = this.dGQL.watch({}, {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all'
    });
   }

  fetch(): Observable<DepartmentsQuery['departments']>  {
    const data = super.fetchValues<DepartmentsQuery>(DepartmentsDocument, 'departments');
    data.subscribe(departments => this.departments = departments);
    return data;
   }

   setEditedDepartment(department: DepartmentsQuery['departments'] | null): void {
    this.editedDepartment = department;
  }
}
