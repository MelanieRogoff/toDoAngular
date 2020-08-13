import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseTutorialComponent } from './switch-case-tutorial.component';

describe('SwitchCaseTutorialComponent', () => {
  let component: SwitchCaseTutorialComponent;
  let fixture: ComponentFixture<SwitchCaseTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchCaseTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCaseTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
