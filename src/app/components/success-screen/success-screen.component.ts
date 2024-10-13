import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-success-screen',
  standalone: true, 
  imports: [RouterModule], 
  templateUrl: './success-screen.component.html'
})
export class SuccessScreenComponent implements OnInit {
  message: string = "Thank you for your purchase! Your transaction was successful.";

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Retrieve the message from the query parameters if available
 
  }
}
