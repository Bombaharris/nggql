import { Directive, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MutationResult } from 'apollo-angular';

export interface LabeledValue {
  label: string;
  value: string;
}

@Directive()
export class SkillFormBaseDirective implements OnDestroy {
  @Output() submitted: EventEmitter<Observable<MutationResult>> =
    new EventEmitter();
  @Output() canceled = new EventEmitter();
  readonly subscription: Subscription = new Subscription();

  constructor() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
