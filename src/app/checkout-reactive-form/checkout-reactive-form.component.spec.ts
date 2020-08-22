import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutReactiveFormComponent } from './checkout-reactive-form.component';

describe('CheckoutReactiveFormComponent', () => {
  let component: CheckoutReactiveFormComponent;
  let fixture: ComponentFixture<CheckoutReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
