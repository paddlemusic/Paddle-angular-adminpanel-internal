import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostLikedAlbumComponent } from './most-liked-album.component';

describe('MostLikedAlbumComponent', () => {
  let component: MostLikedAlbumComponent;
  let fixture: ComponentFixture<MostLikedAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostLikedAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostLikedAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
