import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Sitter } from '../models/sitter.model'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class SittersService {

    private http = inject(HttpClient);
    private API_URL = 'http://localhost:3000/users/sitters';

    getSitters(): Observable<Sitter[]> {
        return this.http.get<Sitter[]>(this.API_URL);
    }
    
}
