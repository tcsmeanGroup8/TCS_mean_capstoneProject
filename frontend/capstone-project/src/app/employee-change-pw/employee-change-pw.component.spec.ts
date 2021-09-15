import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeChangePwComponent } from './employee-change-pw.component';

describe('EmployeeChangePwComponent', () => {
  let component: EmployeeChangePwComponent;
  let fixture: ComponentFixture<EmployeeChangePwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeChangePwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeChangePwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
