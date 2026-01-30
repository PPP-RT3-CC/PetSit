import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  role = 'owner';

get dashboardLink(): string {
  switch (this.role) {
    case 'owner':
      return '/owner';

    case 'sitter':
      return '/sitter';

    case 'admin':
      return '/admin';

    default:
      return '/';
  }
}
}