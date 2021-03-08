import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeSharesComponent } from './like-shares.component';

describe('LikeSharesComponent', () => {
  let component: LikeSharesComponent;
  let fixture: ComponentFixture<LikeSharesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeSharesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
