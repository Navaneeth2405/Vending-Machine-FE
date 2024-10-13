import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { VendingMachineService } from './services/vending-machine.service';
import { ItemListComponent } from "./components/item-list/item-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ItemListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [VendingMachineService]
})
export class AppComponent {
  title = 'vending-machine-frontend';
}