import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { GraphQLModule } from 'src/app/graphql.module';
import { DepartmentTransferComponent } from './department-transfer.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DepartmentPartFragment, PersonWithAllTypeFragment } from 'src/app/generated/graphql';

describe('DepartmentTransferComponent', () => {
  let component: DepartmentTransferComponent;
  let fixture: ComponentFixture<DepartmentTransferComponent>;
  let people: PersonWithAllTypeFragment[] = [
    {
      id: "MrGreen",
      name: "Ralph",
      surname: "Green",
      departments: [],
      experiences: [],
      projects: [],
      rates: [],
      roles: [],
      skills: [],
    }
  ];
  let department: DepartmentPartFragment = {
    id: "Frontend",
    name: "Frontend",
    manager: {
      id: "MrGreen",
      name: "Ralph",
      surname: "Green"
    },
    }
  let departmentId: string | undefined = 'Frontend';
  let departmentsEmployeesIds: string[] = ['Zub'];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartmentTransferComponent],
      imports: [
        NgZorroAntdModule,
        RouterTestingModule.withRoutes(
          [
            {path: 'departments/:id/transfer', component: DepartmentTransferComponent}
          ]
          ),
        BrowserModule,
        GraphQLModule,
        HttpClientModule,
        HttpClientJsonpModule,
        BrowserAnimationsModule,
      ],
      providers: [ {
        provide: ActivatedRoute,
        useValue: {
          params: of({
            id: "Frontend",
          }),
        },
      },]
    })
    .compileComponents();
    fixture = TestBed.createComponent(DepartmentTransferComponent);
    component = fixture.componentInstance;
    component.department = department;
    component.departmentId = departmentId;
    component.departmentsEmployeesIds = departmentsEmployeesIds;
    component.setTransferList(people);
    component.change({from: 'left', to: 'right', list: [{id:'MrGreen', name: 'Ralph', title: 'MrGreen',}]});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
