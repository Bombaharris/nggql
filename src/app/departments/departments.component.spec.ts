import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { GraphQLModule } from '../graphql.module';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { DepartmentsModule } from './departments.module';

describe('DepartmentsComponent', () => {
  let component: DepartmentsComponent;
  let fixture: ComponentFixture<DepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DepartmentsComponent,
      ],
      imports: [
        DepartmentsModule, 
        DepartmentsRoutingModule,
        BrowserModule,
        GraphQLModule,
        HttpClientModule,
        HttpClientJsonpModule,]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
