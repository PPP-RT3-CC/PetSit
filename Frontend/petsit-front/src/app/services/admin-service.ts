import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/admin';

export interface Owner {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
}

export interface Sitter {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  description?: string;
}

export interface Request {
  id: number;
  animalType: string;
  petName: string;
  startDate: string;
  endDate: string;
  description: string;
  status: string;
  owner: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  };
  sitter: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  };
}

interface DeleteResponse {
  deleted: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private http = inject(HttpClient);

  // Get all owners
  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(`${API_URL}/owners`);
  }

  // Get all sitters
  getSitters(): Observable<Sitter[]> {
    return this.http.get<Sitter[]>(`${API_URL}/sitters`);
  }

  // Get all requests
  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(`${API_URL}/requests`);
  }

  // Delete owner
  deleteOwner(id: number): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(`${API_URL}/owners/${id}`);
  }

  // Delete sitter
  deleteSitter(id: number): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(`${API_URL}/sitters/${id}`);
  }

  // Delete request
  deleteRequest(id: number): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(`${API_URL}/requests/${id}`);
  }
}
