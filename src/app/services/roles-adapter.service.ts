import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RolesDocument, RolesQuery } from '../generated/graphql';
import { ApolloClientService } from './apollo-client.service';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class RolesAdapterService extends ApolloClientService{
  roles!: RolesQuery['roles'];
  
  constructor(apollo: Apollo) { 
    super(apollo);
  }
  
  fetch(): Observable<RolesQuery['roles']> {
    const data = super.fetchValues<RolesQuery>(RolesDocument, 'roles')
    data.subscribe(roles => this.roles = roles);
    return data;
  }
}
