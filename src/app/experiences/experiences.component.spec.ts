import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesComponent } from './experiences.component';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import {RouterTestingModule} from "@angular/router/testing";
import { ExperiencesRoutingModule } from './experiences-routing.module';

describe('ExperiencesComponent', () => {
  let controller: ApolloTestingController;
  let component: ExperiencesComponent;
  let fixture: ComponentFixture<ExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesComponent ],
      imports: [ApolloTestingModule, ExperiencesRoutingModule, RouterTestingModule]
    })
    .compileComponents();
    controller = TestBed.inject(ApolloTestingController);
    fixture = TestBed.createComponent(ExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
});
