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
  isSidebarOpen: boolean = false; // ✅ Sidebar state
  restaurantName: string = 'Delicious Bites'; // ✅ Mock Restaurant Name

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen; // ✅ Toggle sidebar state
  }

  navigateTo(route: string) {
    alert(route);
    this.isSidebarOpen = false; // ✅ Close sidebar on navigation
    this.router.navigate([route]); // ✅ Redirect to the selected module
  }

  logout() {
    localStorage.removeItem('token'); // ✅ Clear auth token
    this.router.navigate(['/login']); // ✅ Redirect to login
  }
}
