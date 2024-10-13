import { Component, OnInit } from '@angular/core';
import { VendingMachineService } from '../../services/vending-machine.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './item-list.component.html',
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  quantities: { [itemName: string]: number } = {};

  constructor(private vendingService: VendingMachineService, private router: Router) { }

  ngOnInit(): void {
    this.vendingService.getItems().subscribe({
      next: (items: any[]) => {
        this.items = items.map(item => ({
          ...item,
          imageUrl: this.constructImagePath(item.name)
        }));
        this.items.forEach(item => {
          this.quantities[item.name] = 1;
        });
      },
      error: (error) => {
        console.error('Error fetching items:', error);
      }
    });
  }

  constructImagePath(itemName: string): string {
    const formattedName = itemName.toLowerCase().replace(/\s+/g, '-');
    return `assets/images/${formattedName}.jpg`;
  }

  addToCart(item: any): void {
    const quantity = this.quantities[item.name];
    if (quantity <= 0) {
      alert('Please enter a valid quantity greater than zero.');
      return;
    }
    const itemToAdd = { ...item, quantity };
    this.vendingService.addToCart(itemToAdd);
    alert(`${quantity} unit(s) of ${item.name} have been added to your cart.`);
  }

  goToOrderReview(): void {
    console.log('Navigating to order review');
    this.router.navigate(['/order-review']);
  }
}