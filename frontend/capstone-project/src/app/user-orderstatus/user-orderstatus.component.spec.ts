import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderstatusComponent } from './user-orderstatus.component';

describe('UserOrderstatusComponent', () => {
  let component: UserOrderstatusComponent;
  let fixture: ComponentFixture<UserOrderstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOrderstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrderstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
