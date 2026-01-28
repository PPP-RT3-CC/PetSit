import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);
  private API_URL = 'http://localhost:3000/auth';

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, data);
  }

  register(data: { firstname: string; lastname: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, data);
  }
  
}
