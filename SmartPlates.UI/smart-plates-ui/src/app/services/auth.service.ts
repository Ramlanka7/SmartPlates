import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    console.log('Mock Login: User authenticated'); // ✅ Debugging log

    // ✅ Store a fake JWT token (normally this comes from a backend)
    const fakeAuthToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'
                        + 'eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJhZG1pbiJ9.'
                        + 'HjzI-HMvYxr4oDXN8IAlMgKM6EVNsdD9j0I-OTxtfG8';

    localStorage.setItem('token', fakeAuthToken);
    return true; // ✅ Always return true to simulate successful login
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    console.log('Mock Logout: User logged out'); // ✅ Debugging log
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getAuthToken(): string | null {
    return localStorage.getItem('token'); // ✅ Fetch the fake auth token
  }
}
