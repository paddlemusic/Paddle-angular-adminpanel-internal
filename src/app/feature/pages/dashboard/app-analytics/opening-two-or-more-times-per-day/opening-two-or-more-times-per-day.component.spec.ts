import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningTwoOrMoreTimesPerDayComponent } from './opening-two-or-more-times-per-day.component';

describe('OpeningTwoOrMoreTimesPerDayComponent', () => {
  let component: OpeningTwoOrMoreTimesPerDayComponent;
  let fixture: ComponentFixture<OpeningTwoOrMoreTimesPerDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningTwoOrMoreTimesPerDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningTwoOrMoreTimesPerDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
