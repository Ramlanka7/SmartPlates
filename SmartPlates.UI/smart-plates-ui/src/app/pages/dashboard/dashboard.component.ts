import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // ✅ Order Data
  dineInOrders = 320;
  takeAwayOrders = 150;
  deliveryOrders = 210;

  // ✅ Order Amounts
  dineInAmount = 4800; // Example calculation
  takeAwayAmount = 2250;
  deliveryAmount = 3150;

  // ✅ Compute Total Orders & Sales
  get totalOrders(): number {
    return this.dineInOrders + this.takeAwayOrders + this.deliveryOrders;
  }

  get totalSales(): number {
    return this.dineInAmount + this.takeAwayAmount + this.deliveryAmount;
  }

  currentDate: string = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
}
