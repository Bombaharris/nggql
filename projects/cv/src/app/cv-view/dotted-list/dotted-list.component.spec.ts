import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DottedListComponent } from './dotted-list.component';

describe('DottedListComponent', () => {
  let component: DottedListComponent;
  let fixture: ComponentFixture<DottedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DottedListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DottedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
