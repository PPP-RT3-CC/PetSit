import { Injectable } from '@angular/core';
import { SITTERS } from '../data/sitters.mock';
import { Observable, of } from 'rxjs';
import { Sitter } from '../components/sitters-component/sitters-component';

@Injectable({
  providedIn: 'root',
})
export class SittersService {
    //  mock version 
        getSitters(): Observable<Sitter[]> {
          return of(SITTERS);
        }
    
}
