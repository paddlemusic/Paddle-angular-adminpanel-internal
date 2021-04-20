import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAnalyticsComponent } from './post-analytics.component';

describe('PostAnalyticsComponent', () => {
  let component: PostAnalyticsComponent;
  let fixture: ComponentFixture<PostAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
