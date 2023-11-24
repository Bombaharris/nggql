import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Experience, PersonWithAllTypeFragment, } from 'src/app/generated/graphql';
import { PersonAdapterService } from 'src/app/services/person-adapter.service';
import { QLFilterBuilderService } from 'src/app/services/ql-filter-builder.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  editedPerson!: PersonWithAllTypeFragment | null | undefined;
  personId!: string;
  qlFilterService = new QLFilterBuilderService();
  experiencesResponse: Experience[] | undefined = undefined;
  readonly subscription: Subscription = new Subscription();

 constructor(
    private personAdapterService: PersonAdapterService, private route: ActivatedRoute,
    ) { 
      this.subscription.add(
        this.route.params.subscribe(params => {
        this.personId = params['id'];
      }));
      this.personAdapterService.setPersonQueryRef(this.personId);
      
    }

  ngOnInit(): void {
    this.personAdapterService.personQueryRef?.valueChanges.subscribe(({ data, loading, errors }) => {
      if(loading) {
        this.isLoading = loading;
      }
      if(errors) {
        errors.map(e => console.error(e));
        this.isLoading = false;
      }
      if(data && data.people) {
        this.editedPerson = data.people.find(p => p.id === this.personId);
        this.isLoading = false;
      }
    })    
  }

  submitExperience($event: AbstractControl<any,any>): void {
    this.isLoading = true;
    this.personAdapterService.updatePersonExperiences(this.personId, $event);
    this.isLoading = false;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }


}
