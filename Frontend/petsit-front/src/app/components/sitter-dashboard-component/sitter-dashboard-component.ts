import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RequestsService } from '../../services/requests-service';
import { RouterLink } from '@angular/router';

interface Request {
  id: number;
  ownerName: string;
  animalType: string;
  startDate: string;
  endDate: string;
  description: string;
  status: 'pending' | 'accepted' | 'refused';
}

@Component({
  selector: 'app-sitter-dashboard-component',
  imports: [CommonModule,RouterLink],
  templateUrl: './sitter-dashboard-component.html',
  styleUrl: './sitter-dashboard-component.css',
})
export class SitterDashboardComponent {
    requests: Request[] = [];

    private requestsService = inject(RequestsService);
  ngOnInit(): void {
    this.requestsService.getRequests().subscribe((data) => {
      this.requests = data;
    });
  }


acceptRequest(id: number) {
  this.requests = this.requests.filter(req => req.id !== id);
}

refuseRequest(id: number) {
  this.requests = this.requests.filter(req => req.id !== id);
}


}
