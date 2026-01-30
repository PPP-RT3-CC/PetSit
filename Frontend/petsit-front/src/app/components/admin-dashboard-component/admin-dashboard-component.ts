import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AdminService, Owner, Sitter, Request } from '../../services/admin-service';
import { AdminTableComponent, TableColumn } from '../admin-table/admin-table';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, AdminTableComponent],
  templateUrl: './admin-dashboard-component.html',
  styleUrl: './admin-dashboard-component.css',
})
export class AdminDashboardComponent implements OnInit {
  private adminService = inject(AdminService);

  // Using signals for reactive state
  owners = signal<Owner[]>([]);
  sitters = signal<Sitter[]>([]);
  requests = signal<Request[]>([]);
  activeTab = signal<'owners' | 'sitters' | 'requests'>('owners');

  ngOnInit() {
    this.loadOwners();
    this.loadSitters();
    this.loadRequests();
  }

  private loadOwners() {
    this.adminService.getOwners().subscribe({
      next: (data) => this.owners.set(data),
      error: (err) => console.error('Error loading owners:', err)
    });
  }

  private loadSitters() {
    this.adminService.getSitters().subscribe({
      next: (data) => this.sitters.set(data),
      error: (err) => console.error('Error loading sitters:', err)
    });
  }

  private loadRequests() {
    this.adminService.getRequests().subscribe({
      next: (data) => this.requests.set(data),
      error: (err) => console.error('Error loading requests:', err)
    });
  }

  // Column configurations
  ownerColumns: TableColumn[] = [
    { key: 'id', label: 'ID' },
    { key: 'firstname', label: 'First Name', type: 'strong' },
    { key: 'lastname', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' }
  ];

  sitterColumns: TableColumn[] = [
    { key: 'id', label: 'ID' },
    { key: 'firstname', label: 'First Name', type: 'strong' },
    { key: 'lastname', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'description', label: 'Description' }
  ];

  requestColumns: TableColumn[] = [
    { key: 'id', label: 'ID' },
    { key: 'petName', label: 'Pet Name', type: 'strong' },
    { key: 'animalType', label: 'Animal Type', type: 'badge', badgeClass: 'pet-type-badge' },
    { key: 'ownerName', label: 'Owner', computed: (row: any) => `${row.owner.firstname} ${row.owner.lastname}` },
    { key: 'sitterName', label: 'Sitter', computed: (row: any) => `${row.sitter.firstname} ${row.sitter.lastname}` },
    { key: 'startDate', label: 'Start Date' },
    { key: 'endDate', label: 'End Date' },
    { key: 'status', label: 'Status', type: 'status' }
  ];

  setActiveTab(tab: 'owners' | 'sitters' | 'requests') {
    this.activeTab.set(tab);
  }

  deleteOwner(id: number) {
    if (confirm('Are you sure you want to delete this owner?')) {
      this.adminService.deleteOwner(id).subscribe({
        next: (response) => {
          if (response.deleted) {
            this.loadOwners();
            console.log(response.message);
          } else {
            console.error(response.message);
          }
        },
        error: (err) => console.error('Error deleting owner:', err)
      });
    }
  }

  deleteSitter(id: number) {
    if (confirm('Are you sure you want to delete this sitter?')) {
      this.adminService.deleteSitter(id).subscribe({
        next: (response) => {
          if (response.deleted) {
            this.loadSitters();
            console.log(response.message);
          } else {
            console.error(response.message);
          }
        },
        error: (err) => console.error('Error deleting sitter:', err)
      });
    }
  }

  deleteRequest(id: number) {
    if (confirm('Are you sure you want to delete this request?')) {
      this.adminService.deleteRequest(id).subscribe({
        next: (response) => {
          if (response.deleted) {
            this.loadRequests();
            console.log(response.message);
          } else {
            console.error(response.message);
          }
        },
        error: (err) => console.error('Error deleting request:', err)
      });
    }
  }
}
