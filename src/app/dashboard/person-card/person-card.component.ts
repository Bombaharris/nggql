import { Component, OnInit, Input } from '@angular/core';
import { PersonWithAllTypeFragment } from 'src/app/generated/graphql';

@Component({
  selector: 'sd-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() person!: PersonWithAllTypeFragment[][0];

  constructor() { }

  ngOnInit(): void {
  }

}
