import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsService } from './../../../services/requests-service';

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
    private router: Router,
    private requestsService: RequestsService
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
       console.log('Testing navigation...');
  this.router.navigate(['/sitter']).then(
    success => console.log('Success!', success),
    error => console.error('Failed!', error)
  );
      this.router.navigate(['/owner']);

      this.requestsService.createRequest(data).subscribe(() => {

      });

    }
  }
}
