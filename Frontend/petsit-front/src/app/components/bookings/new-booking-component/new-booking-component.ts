import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, type NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../../services/booking-service';

@Component({
  selector: 'app-new-booking-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './new-booking-component.html',
  styleUrl: './new-booking-component.css',
})
export class NewBookingComponent implements OnInit {
  
  sitterId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.sitterId = Number(
      this.route.snapshot.queryParamMap.get('sitterId')
    );
  }

  onSubmit(bookingForm: NgForm): void {
    if (bookingForm.valid) {
      const data = {
        sitterId: this.sitterId,
        ...bookingForm.value
      };

      this.bookingService.createBooking(data).subscribe(() => {
        alert('Booking request sent');
      });
    }
  }
}
