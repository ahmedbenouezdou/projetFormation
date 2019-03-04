import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionUserComponent } from './subscription-user.component';

describe('SubscriptionUserComponent', () => {
  let component: SubscriptionUserComponent;
  let fixture: ComponentFixture<SubscriptionUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
