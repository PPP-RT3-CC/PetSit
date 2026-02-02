import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { SittersService } from './../../services/sitters-service';
import { Sitter } from '../../models/sitter.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sitters-component',
  imports: [CommonModule],
  templateUrl: './sitters-component.html',
  styleUrl: './sitters-component.css',
})
export class SittersComponent implements OnInit {

  sitters: Sitter[] = [];
  role: string | null = null;
  isLoggedIn = false;


  constructor(
    private router: Router,
    //private sittersService: SittersService
  ) {}
  private sittersService = inject(SittersService);
sitters$: Observable<Sitter[]> = this.sittersService.getSitters();
  // ngOnInit(): void {
  //   this.sittersService.getSitters().subscribe(data => {
  //     this.sitters = data;
  //     console.log('Fetched sitters:', this.sitters);
  //   });
  // }

  ngOnInit() {
    this.role = localStorage.getItem('role');
    this.isLoggedIn = !!localStorage.getItem('token'); 
  }

  requestSitting(sitterId: number): void {
    
      if (!this.isLoggedIn) {
        this.router.navigate(['/register']); 
        return; 
      }
      else{
      this.router.navigate(
        ['/bookings/new'],
        { queryParams: { sitterId } }
      );
    }}
}
