import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  restaurantName: string = 'Delicious Bites'; // ✅ Set your restaurant name here

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token'); // ✅ Clear fake auth token
    this.router.navigate(['/login']); // ✅ Redirect to login
  }
}
