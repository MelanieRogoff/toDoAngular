import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTutorialComponent } from './products-tutorial.component';

describe('ProductsTutorialComponent', () => {
  let component: ProductsTutorialComponent;
  let fixture: ComponentFixture<ProductsTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
