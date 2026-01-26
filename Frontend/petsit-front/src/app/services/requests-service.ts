import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Request, REQUESTS} from '../data/requests.mock';


@Injectable({
  providedIn: 'root',
})

export class RequestsService {

  getSitterRequests(sitterId: number): Observable<Request[]>{
    return of(REQUESTS.filter(r => r.sitterId === sitterId));
  }

  getOwnerRequests(ownerId: number): Observable<Request[]> {
      return of(REQUESTS.filter(r => r.ownerId === ownerId));
    }

  createRequest(data: Request): Observable<any> {
    console.log('Mock Request:', data); 
    return of({ success: true });       
  }
  ///accept request function
  ///refuse request function


    
}
