import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    alert('Yes');
    const isAuthenticated = !!localStorage.getItem('token'); // ✅ Check if token exists
    if (!isAuthenticated) {
      this.router.navigate(['/login']); // ✅ Redirect only if not logged in
      return false;
    }
    return true; // ✅ Allow navigation if logged in
  }
}
