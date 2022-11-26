import { Component, OnInit, Input } from '@angular/core';
import { PersonsWithAllQuery } from 'src/app/generated/graphql';

@Component({
  selector: 'sd-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() person!: PersonsWithAllQuery['people'][0];

  constructor() { }

  ngOnInit(): void {
  }

}
