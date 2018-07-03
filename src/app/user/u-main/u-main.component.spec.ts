import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UMainComponent } from './u-main.component';

describe('UMainComponent', () => {
  let component: UMainComponent;
  let fixture: ComponentFixture<UMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
