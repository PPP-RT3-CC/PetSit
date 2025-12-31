import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OwnerRequest } from '../components/owner-dashboard-component/owner-dashboard-component';
import { OWNER_REQUESTS_MOCK } from '../data/ownerReq.mock';

@Injectable({
  providedIn: 'root',
})
export class OwnerRequestsService {
    constructor() {}

  getOwnerRequests(): Observable<OwnerRequest[]> {
    return of(OWNER_REQUESTS_MOCK);
  }
}
