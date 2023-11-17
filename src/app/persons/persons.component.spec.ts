import { ComponentFixture, TestBed,  } from '@angular/core/testing';

import { PersonsComponent } from './persons.component';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';

describe('PersonsComponent', () => {
  let component: PersonsComponent;
  let fixture: ComponentFixture<PersonsComponent>;
  let controller: ApolloTestingController;
  let router: Router;  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsComponent ],
      imports: [ RouterTestingModule.withRoutes(
        [
          {path: 'persons/:id/experiences', component: PersonsComponent}
        ], {
          
        }
        ),
        ApolloTestingModule,
        NgZorroAntdModule
      ],
      providers: [ApolloTestingModule],
    })
    .compileComponents();
    controller = TestBed.inject(ApolloTestingController);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(PersonsComponent);
    router.initialNavigation();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
