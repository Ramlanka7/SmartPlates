import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      //localStorage.setItem('token', 'fake-jwt-token'); // Fake token storage
      const fakeAuthToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'
      + 'eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJhZG1pbiJ9.'
      + 'HjzI-HMvYxr4oDXN8IAlMgKM6EVNsdD9j0I-OTxtfG8';

      localStorage.setItem('token', fakeAuthToken);
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
