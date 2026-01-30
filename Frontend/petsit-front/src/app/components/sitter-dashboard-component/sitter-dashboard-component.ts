import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RequestsService } from '../../services/requests-service';
import { RouterLink } from '@angular/router';
import type { Request } from '../../data/requests.mock';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sitter-dashboard-component',
  imports: [CommonModule],
  templateUrl: './sitter-dashboard-component.html',
  styleUrl: './sitter-dashboard-component.css',
})
export class SitterDashboardComponent {
  private requestsService = inject(RequestsService);
  sitterRequests$ : Observable<Request[]> = this.requestsService.getSitterRequests(); 

  acceptRequest(id: number) {
    this.requestsService.acceptRequest(id).subscribe(() => {
      this.sitterRequests$ = this.requestsService.getSitterRequests();
    });
  }

  refuseRequest(id: number) {
    this.requestsService.refuseRequest(id).subscribe(() => {
      this.sitterRequests$ = this.requestsService.getSitterRequests();
    });
  }
  // sitterRequests: Request[] = [];

  // private requestsService = inject(RequestsService);
  // ngOnInit(): void {
  //   this.loadRequests();
  // }

  // private loadRequests(): void {
  //   this.requestsService
  //     .getSitterRequests()
  //     .subscribe(requests => {
  //       this.sitterRequests = requests;
  //       console.log('Fetched sitter requests:', this.sitterRequests);
  //     });
  // }


//make accept and refuse functions later update the requestsservice 
// acceptRequest(id: number) {
//     this.requestsService.acceptRequest(id)
//       .subscribe(() => this.loadRequests());
// }

// refuseRequest(id: number) {
//   this.requestsService.refuseRequest(id)
//     .subscribe(() => this.loadRequests());
// }


/*
  
  sitterId: number = 101; //well get it from auth
  sitterRequests: Request[] = [];

  private requestsService = inject(RequestsService);
  ngOnInit(): void {
    this.loadRequests();
  }

  private loadRequests(): void {
    this.requestsService
      .getSitterRequests(this.sitterId)
      .subscribe(requests => {
        this.sitterRequests = requests;
      });
  }
*/

}
