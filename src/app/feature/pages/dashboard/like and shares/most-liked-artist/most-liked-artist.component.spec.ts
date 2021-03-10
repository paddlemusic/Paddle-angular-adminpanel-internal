import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostLikedArtistComponent } from './most-liked-artist.component';

describe('MostLikedArtistComponent', () => {
  let component: MostLikedArtistComponent;
  let fixture: ComponentFixture<MostLikedArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostLikedArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostLikedArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
