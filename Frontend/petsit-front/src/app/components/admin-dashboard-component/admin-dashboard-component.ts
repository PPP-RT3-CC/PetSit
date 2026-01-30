import { Component, signal, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  // Using Angular signals (newest feature)
  owners = signal<Owner[]>([]);
  sitters = signal<Sitter[]>([]);
  requests = signal<Request[]>([]);
  activeTab = signal<'owners' | 'sitters' | 'requests'>('owners');

  // Computed signals for counts
  ownersCount = computed(() => this.owners().length);
  sittersCount = computed(() => this.sitters().length);
  requestsCount = computed(() => this.requests().length);

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

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // Load owners
    this.adminService.getOwners().subscribe({
      next: (data) => this.owners.set(data),
      error: (err) => console.error('Error loading owners:', err)
    });

    // Load sitters
    this.adminService.getSitters().subscribe({
      next: (data) => this.sitters.set(data),
      error: (err) => console.error('Error loading sitters:', err)
    });

    // Load requests
    this.adminService.getRequests().subscribe({
      next: (data) => this.requests.set(data),
      error: (err) => console.error('Error loading requests:', err)
    });
  }

  setActiveTab(tab: 'owners' | 'sitters' | 'requests') {
    this.activeTab.set(tab);
  }

  deleteOwner(id: number) {
    if (confirm('Are you sure you want to delete this owner?')) {
      this.adminService.deleteOwner(id).subscribe({
        next: (response) => {
          if (response.deleted) {
            this.owners.update(owners => owners.filter(owner => owner.id !== id));
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
            this.sitters.update(sitters => sitters.filter(sitter => sitter.id !== id));
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
            this.requests.update(requests => requests.filter(request => request.id !== id));
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
