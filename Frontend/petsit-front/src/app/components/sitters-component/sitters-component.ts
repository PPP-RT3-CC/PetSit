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
export class SittersComponent  {

  sitters: Sitter[] = [];

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

  requestSitting(sitterId: number): void {
      this.router.navigate(
        ['/bookings/new'],
        { queryParams: { sitterId } }
      );
    }
}
