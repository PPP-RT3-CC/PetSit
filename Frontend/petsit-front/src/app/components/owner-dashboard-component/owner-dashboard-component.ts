import { Request } from './../../data/requests.mock';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RequestsService } from '../../services/requests-service';


@Component({
  selector: 'app-owner-dashboard-component',
  imports: [CommonModule,RouterLink],
  templateUrl: './owner-dashboard-component.html',
  styleUrl: './owner-dashboard-component.css',
})
export class OwnerDashboardComponent {
  private requestsService = inject(RequestsService);

  ownerId: number = 1; //we'll get it from auth
  ownerRequests: Request[] = [];

  ngOnInit(): void {
    this.loadRequests();
  }

  private loadRequests(): void {
    this.requestsService
      .getOwnerRequests(this.ownerId)
      .subscribe(requests => {
        this.ownerRequests = requests;
      });
  }


  
  
}