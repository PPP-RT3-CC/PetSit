import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SITTERS } from '../data/sitters.mock';
import { REQUESTS as requests } from '../data/requests.mock';
import { Sitter } from '../models/sitter.model';
import { Request } from '../data/requests.mock';

// Mock Owner interface and data
export interface Owner {
  id: number;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
}

const MOCK_OWNERS: Owner[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', joinDate: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321', joinDate: '2024-02-20' },
  { id: 3, name: 'Bob Wilson', email: 'bob@example.com', phone: '555-123-4567', joinDate: '2024-03-10' },
];

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  
  // Get all owners
  getOwners(): Observable<Owner[]> {
    return of(MOCK_OWNERS);
  }

  // Get all sitters
  getSitters(): Observable<Sitter[]> {
    return of(SITTERS);
  }

  // Get all requests
  getRequests(): Observable<Request[]> {
    return of(requests);
  }

  // Delete owner
  deleteOwner(id: number): Observable<boolean> {
    // TODO: Replace with actual API call
    return of(true);
  }

  // Delete sitter
  deleteSitter(id: number): Observable<boolean> {
    // TODO: Replace with actual API call
    return of(true);
  }

  // Delete request
  deleteRequest(id: number): Observable<boolean> {
    // TODO: Replace with actual API call
    return of(true);
  }
}
