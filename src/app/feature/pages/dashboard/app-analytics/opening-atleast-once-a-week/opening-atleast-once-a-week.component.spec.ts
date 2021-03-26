import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningAtleastOnceAWeekComponent } from './opening-atleast-once-a-week.component';

describe('OpeningAtleastOnceAWeekComponent', () => {
  let component: OpeningAtleastOnceAWeekComponent;
  let fixture: ComponentFixture<OpeningAtleastOnceAWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningAtleastOnceAWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningAtleastOnceAWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
