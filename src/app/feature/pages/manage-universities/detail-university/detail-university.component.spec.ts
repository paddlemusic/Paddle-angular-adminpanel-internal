import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUniversityComponent } from './detail-university.component';

describe('DetailUniversityComponent', () => {
  let component: DetailUniversityComponent;
  let fixture: ComponentFixture<DetailUniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
