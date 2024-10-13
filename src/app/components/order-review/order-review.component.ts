import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { VendingMachineService } from '../../services/vending-machine.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  imports: [CommonModule, RouterModule] 
})
export class OrderReviewComponent implements OnInit {
  cart: any[] = [];

  constructor(private router: Router, private vendingService: VendingMachineService) { }

  ngOnInit(): void {
    this.cart = this.vendingService.getCartItems().map(item => ({
      ...item,
      imageUrl: this.constructImagePath(item.name)
    }));
  }

  constructImagePath(itemName: string): string {
    const formattedName = itemName.toLowerCase().replace(/\s+/g, '-');
    return `assets/images/${formattedName}.jpg`;
  }

  proceedToPayment(): void {
    this.router.navigate(['/purchase']);
  }

  goToItemList(): void {
    this.router.navigate(['/']);
  }
}
