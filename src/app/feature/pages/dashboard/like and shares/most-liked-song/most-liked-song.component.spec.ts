import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostLikedSongComponent } from './most-liked-song.component';

describe('MostLikedSongComponent', () => {
  let component: MostLikedSongComponent;
  let fixture: ComponentFixture<MostLikedSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostLikedSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostLikedSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
