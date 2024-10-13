import { Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { OrderReviewComponent } from './components/order-review/order-review.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { SuccessScreenComponent } from './components/success-screen/success-screen.component';

export const appRoutes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'order-review', component: OrderReviewComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'success', component: SuccessScreenComponent },
  { path: '**', redirectTo: '' }
];


