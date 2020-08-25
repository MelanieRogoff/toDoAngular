import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondReactiveFormComponent } from './second-reactive-form.component';

describe('SecondReactiveFormComponent', () => {
  let component: SecondReactiveFormComponent;
  let fixture: ComponentFixture<SecondReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
