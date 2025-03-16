import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect root path to login
  { path: '**', redirectTo: 'login' }, // Handle unknown routes

  // Protected routes (Only accessible if logged in)
  { path: 'pos', loadComponent: () => import('./features/pos/pos.component').then(m => m.PosComponent), canActivate: [AuthGuard] },
  { path: 'table-management', loadComponent: () => import('./features/table-management/table-management.component').then(m => m.TableManagementComponent), canActivate: [AuthGuard] },
  { path: 'menu-management', loadComponent: () => import('./features/menu-management/menu-management.component').then(m => m.MenuManagementComponent), canActivate: [AuthGuard] },
  { path: 'inventory-management', loadComponent: () => import('./features/inventory-management/inventory-management.component').then(m => m.InventoryManagementComponent), canActivate: [AuthGuard] },
  { path: 'billing-payments', loadComponent: () => import('./features/billing-payments/billing-payments.component').then(m => m.BillingPaymentsComponent), canActivate: [AuthGuard] },
  { path: 'employee-management', loadComponent: () => import('./features/employee-management/employee-management.component').then(m => m.EmployeeManagementComponent), canActivate: [AuthGuard] },
  { path: 'reports-analytics', loadComponent: () => import('./features/reports-analytics/reports-analytics.component').then(m => m.ReportsAnalyticsComponent), canActivate: [AuthGuard] }
];
