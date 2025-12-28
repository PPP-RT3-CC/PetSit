import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RequestsService } from '../../services/requests-service';

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
  imports: [CommonModule],
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
    const req = this.requests.find(r => r.id === id);
    if (req) req.status = 'accepted';
  }

  refuseRequest(id: number) {
    const req = this.requests.find(r => r.id === id);
    if (req) req.status = 'refused';
  }

}
