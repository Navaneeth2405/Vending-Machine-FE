import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendingMachineService } from '../../services/vending-machine.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  imports: [CommonModule, FormsModule]
})
export class PurchaseComponent implements OnInit {
  totalAmount: number = 0;
  payment: number = 0;
  cart: any[] = [];
  message: string = '';

  constructor(
    private vendingService: VendingMachineService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cart = this.vendingService.getCartItems().map(item => ({
      ...item,
      imageUrl: this.constructImagePath(item.name)
    }));
    this.totalAmount = this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  constructImagePath(itemName: string): string {
    const formattedName = itemName.toLowerCase().replace(/\s+/g, '-');
    return `assets/images/${formattedName}.jpg`;
  }

  makePayment(): void {
    this.vendingService.purchaseItems(this.cart, this.payment).subscribe({
      next: (response: string) => {
        console.log('Response:', response);
        this.message = response;
        this.vendingService.clearCart();
      },
      error: (error) => {
        console.error('Error:', error);
        this.message = error.error || 'An error occurred while processing the payment. Please try again.';
      }
    });
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}