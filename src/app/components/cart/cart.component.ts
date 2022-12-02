import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getAllProducts();
    this.products.forEach((product) => {
      this.totalPrice += product.price * product.quantity;
      this.totalPrice.toFixed(2);
    });
  }

  onOrderSubmit(): void {
    let message = 'Order Submitted';

    if (!this.cartService.clearCart()) {
      message = 'Something went wrong';
    }

    alert(message);
    window.location.href = '/';
  }
}
