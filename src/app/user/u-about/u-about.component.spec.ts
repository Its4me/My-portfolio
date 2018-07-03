import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UAboutComponent } from './u-about.component';

describe('UAboutComponent', () => {
  let component: UAboutComponent;
  let fixture: ComponentFixture<UAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
