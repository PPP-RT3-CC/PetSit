import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { SittersService } from './../../services/sitters-service';


export interface Sitter {
  id: number;
  firstname: string;
  lastname: string;
  description: string;
  availability: string;
}

@Component({
  selector: 'app-sitters-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './sitters-component.html',
  styleUrl: './sitters-component.css',
})
export class SittersComponent implements OnInit {

  sitters: Sitter[] = [];

  constructor(
    private router: Router,
    private sittersService: SittersService
  ) {}

  ngOnInit(): void {
    this.sittersService.getSitters().subscribe(data => {
      this.sitters = data;
    });
  }

  requestSitting(sitterId: number): void {
      this.router.navigate(
        ['/bookings/new'],
        { queryParams: { sitterId } }
      );
    }
}
