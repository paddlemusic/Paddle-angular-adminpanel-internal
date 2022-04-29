import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityListingComponent } from './university-listing.component';

describe('UniversityListingComponent', () => {
  let component: UniversityListingComponent;
  let fixture: ComponentFixture<UniversityListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
