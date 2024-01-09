import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { GraphQLModule } from '../graphql.module';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsComponent],
      imports: [
        SkillsRoutingModule,
        BrowserModule,
        GraphQLModule,
        HttpClientModule,
        HttpClientJsonpModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
