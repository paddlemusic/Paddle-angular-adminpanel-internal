import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAnalyticsComponent } from './app-analytics.component';

describe('AppAnalyticsComponent', () => {
  let component: AppAnalyticsComponent;
  let fixture: ComponentFixture<AppAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
