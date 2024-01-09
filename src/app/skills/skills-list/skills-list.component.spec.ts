import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { GraphQLModule } from 'src/app/graphql.module';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { SkillsRoutingModule } from '../skills-routing.module';
import { SkillsListComponent } from './skills-list.component';

describe('SkillsListComponent', () => {
  let component: SkillsListComponent;
  let fixture: ComponentFixture<SkillsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsListComponent],
      imports: [
        RouterTestingModule.withRoutes(
          [
            {path: 'skills', component: SkillsListComponent}
          ]
          ),
          NgZorroAntdModule,
          SkillsRoutingModule,
          BrowserModule,
          GraphQLModule,
          BrowserAnimationsModule,
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SkillsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
