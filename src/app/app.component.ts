import { MovieQuery, MovieGQL } from './generated/graphql';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  movies: Observable<MovieQuery['movies']>;

  constructor(feedGQL: MovieGQL) {
    this.movies = feedGQL
      .watch()
      .valueChanges.pipe(
        map(result => result.data.movies)
      );
  }
  title = 'nggql';
}
