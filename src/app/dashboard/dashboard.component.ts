
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonsWithAllGQL, PersonsWithAllQuery, ProjectsWithAllGQL, ProjectsWithAllQuery } from '../generated/graphql';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy  {
  people$: Observable<PersonsWithAllQuery['people']>;
  projects$: Observable<ProjectsWithAllQuery['projects']>;
  filterForm = new FormGroup({
    project: new FormControl(''),
  });
  readonly subscription: Subscription = new Subscription();
  
  constructor(
      pGQL: PersonsWithAllGQL,
      prGQL: ProjectsWithAllGQL,
      private route: ActivatedRoute,
    ) {
    this.people$ = pGQL
      .watch()
      .valueChanges
      .pipe(
        map((result) => result.data.people)
      );
    this.projects$ = prGQL
      .watch()
      .valueChanges
      .pipe(
        map((result) => result.data.projects)
      );
  }

  ngOnInit(): void {
    this.subscription.add(
      this.route.queryParams.subscribe((params: Params) => {
        console.log(params.project);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
