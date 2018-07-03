import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UBlogComponent } from './u-blog.component';

describe('UBlogComponent', () => {
  let component: UBlogComponent;
  let fixture: ComponentFixture<UBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
