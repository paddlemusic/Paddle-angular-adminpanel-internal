import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSharedSongComponent } from './most-shared-song.component';

describe('MostSharedSongComponent', () => {
  let component: MostSharedSongComponent;
  let fixture: ComponentFixture<MostSharedSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostSharedSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostSharedSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
