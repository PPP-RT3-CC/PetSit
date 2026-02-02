import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../services/auth';


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  role: string | null = null;

  constructor() {
    this.role = localStorage.getItem('role');
  }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); 
  }

  private authService = inject(Auth);
  private router = inject(Router);
  logout() {
    this.authService.logout().subscribe(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      this.router.navigate(['/']);
    });
  }

}