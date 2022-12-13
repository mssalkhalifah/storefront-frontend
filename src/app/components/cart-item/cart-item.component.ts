import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() product: Product | undefined;

  constructor(private cartService: CartService) {}

  deleteItem(): void {
    if (this.product) {
      if (!this.cartService.removeItem(this.product)) {
        alert('Could not delete item');
      } else {
        alert(`Item ${this.product.name} was removed`);
      }
    }
  }
}
