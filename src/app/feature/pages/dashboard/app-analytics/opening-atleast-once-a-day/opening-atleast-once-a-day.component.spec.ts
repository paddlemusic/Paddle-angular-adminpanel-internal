import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningAtleastOnceADayComponent } from './opening-atleast-once-a-day.component';

describe('OpeningAtleastOnceADayComponent', () => {
  let component: OpeningAtleastOnceADayComponent;
  let fixture: ComponentFixture<OpeningAtleastOnceADayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningAtleastOnceADayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningAtleastOnceADayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
