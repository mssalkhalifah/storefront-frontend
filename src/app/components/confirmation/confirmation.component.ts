import { Component, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnDestroy {
  totalPrice = 0;

  constructor(private cartService: CartService) {}

  ngOnDestroy(): void {
    this.cartService.clearCart();
  }

  setTotalPrice(totalPrice: number): void {
    this.totalPrice = totalPrice;
  }
}
