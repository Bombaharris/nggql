import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentTransferComponent } from './department-transfer.component';

describe('DepartmentTransferComponent', () => {
  let component: DepartmentTransferComponent;
  let fixture: ComponentFixture<DepartmentTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentTransferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartmentTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
