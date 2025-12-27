import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
    // mock version 
  createBooking(data: any): Observable<any> {
      console.log('Mock booking sent:', data);
    return of({ success: true });
  }


}
