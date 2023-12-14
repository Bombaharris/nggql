import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DepartmentsDocument, DepartmentsQuery } from '../generated/graphql';
import { ApolloClientService } from './apollo-client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsAdapterService extends ApolloClientService {
  departments!: DepartmentsQuery['departments'];
  
  constructor(apollo: Apollo) {
    super(apollo);
   }

  fetch(): Observable<DepartmentsQuery['departments']>  {
    const data = super.fetchValues<DepartmentsQuery>(DepartmentsDocument, 'departments');
    data.subscribe(departments => this.departments = departments);
    return data;
   }
}
