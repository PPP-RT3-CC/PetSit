import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OwnerRequestsService } from '../../services/owner-requests-service';

export interface OwnerRequest {
  id: number;
  animalType: string;
  petName: string;
  startDate: string;
  endDate: string;
  description: string;
  status: 'pending' | 'accepted' | 'refused';
}

@Component({
  selector: 'app-owner-dashboard-component',
  imports: [CommonModule,RouterLink],
  templateUrl: './owner-dashboard-component.html',
  styleUrl: './owner-dashboard-component.css',
})
export class OwnerDashboardComponent {
   private ownerRequestsService = inject(OwnerRequestsService);

  requests: OwnerRequest[] = [];

  ngOnInit(): void {
    this.loadRequests();
  }

  private loadRequests(): void {
    this.ownerRequestsService
      .getOwnerRequests()
      .subscribe(requests => {
        this.requests = requests;
      });
  }


  
  
}