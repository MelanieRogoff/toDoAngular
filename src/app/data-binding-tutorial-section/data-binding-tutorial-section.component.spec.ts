import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingTutorialSectionComponent } from './data-binding-tutorial-section.component';

describe('DataBindingTutorialSectionComponent', () => {
  let component: DataBindingTutorialSectionComponent;
  let fixture: ComponentFixture<DataBindingTutorialSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingTutorialSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingTutorialSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
