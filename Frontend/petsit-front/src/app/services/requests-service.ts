import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Request, requests} from '../data/requests.mock';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  getRequests(): Observable<Request[]>{
    return of(requests);
  }
}
