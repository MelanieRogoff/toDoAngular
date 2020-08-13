import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForTutorialComponent } from './ng-for-tutorial.component';

describe('NgForTutorialComponent', () => {
  let component: NgForTutorialComponent;
  let fixture: ComponentFixture<NgForTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
