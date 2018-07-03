import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AAboutComponent } from './a-about.component';

describe('AAboutComponent', () => {
  let component: AAboutComponent;
  let fixture: ComponentFixture<AAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
