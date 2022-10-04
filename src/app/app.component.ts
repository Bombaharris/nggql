import {
  PersonsWithFriendsQuery,
  PersonsWithFriendsGQL,
} from './generated/graphql';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  people$: Observable<PersonsWithFriendsQuery['people']>;

  constructor(feedGQL: PersonsWithFriendsGQL) {
    this.people$ = feedGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.people));
  }

  trackName(index: any, item: any): string {
    return item.name;
  }
}
