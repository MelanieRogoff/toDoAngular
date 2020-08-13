import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfTutorialComponent } from './ng-if-tutorial.component';

describe('NgIfTutorialComponent', () => {
  let component: NgIfTutorialComponent;
  let fixture: ComponentFixture<NgIfTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
