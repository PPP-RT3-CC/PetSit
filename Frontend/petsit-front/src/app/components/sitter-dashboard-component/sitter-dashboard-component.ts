import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RequestsService } from '../../services/requests-service';
import { RouterLink } from '@angular/router';
import type { Request } from '../../data/requests.mock';


@Component({
  selector: 'app-sitter-dashboard-component',
  imports: [CommonModule,RouterLink],
  templateUrl: './sitter-dashboard-component.html',
  styleUrl: './sitter-dashboard-component.css',
})
export class SitterDashboardComponent {
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

//make accept and refuse functions later update the requestsservice 
acceptRequest(id: number) {
  this.sitterRequests = this.sitterRequests.filter(req => req.id !== id);
}

refuseRequest(id: number) {
  this.sitterRequests = this.sitterRequests.filter(req => req.id !== id);
}


}
