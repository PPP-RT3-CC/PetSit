import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookingComponent } from './new-booking-component';

describe('NewBookingComponent', () => {
  let component: NewBookingComponent;
  let fixture: ComponentFixture<NewBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBookingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
