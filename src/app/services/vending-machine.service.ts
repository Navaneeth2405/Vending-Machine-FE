import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendingMachineService {
  private apiUrl = 'http://localhost:8080/api/vending';
  private cart: any[] = [];

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/items`);
  }

  addToCart(item: any): void {
    const existingItemIndex = this.cart.findIndex(cartItem => cartItem.name === item.name);
    if (existingItemIndex > -1) {
      this.cart[existingItemIndex].quantity += item.quantity;
    } else {
      this.cart.push({ ...item });
    }
  }

  getCartItems(): any[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
  }

  purchaseItems(items: any[], payment: number): Observable<string> {
    const purchasePayload = {
      items: items.map(item => ({
        name: item.name,
        quantity: item.quantity
      })),
      payment: payment
    };
    
    return this.http.post(`${this.apiUrl}/purchase`, purchasePayload, { responseType: 'text' });
  }
}