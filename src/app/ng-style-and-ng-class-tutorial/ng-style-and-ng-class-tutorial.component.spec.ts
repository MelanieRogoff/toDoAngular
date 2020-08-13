import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleAndNgClassTutorialComponent } from './ng-style-and-ng-class-tutorial.component';

describe('NgStyleAndNgClassTutorialComponent', () => {
  let component: NgStyleAndNgClassTutorialComponent;
  let fixture: ComponentFixture<NgStyleAndNgClassTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyleAndNgClassTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleAndNgClassTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
