import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveRowReactiveFormComponent } from './remove-row-reactive-form.component';

describe('RemoveRowReactiveFormComponent', () => {
  let component: RemoveRowReactiveFormComponent;
  let fixture: ComponentFixture<RemoveRowReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveRowReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveRowReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
