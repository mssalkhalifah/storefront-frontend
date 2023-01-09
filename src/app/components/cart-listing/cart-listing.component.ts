import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-cart-listing',
  templateUrl: './cart-listing.component.html',
  styleUrls: ['./cart-listing.component.css'],
})
export class CartListingComponent implements OnInit {
  products: Product[] = [];
  totalPrice = 0;
  @Output() totalPriceEvent = new EventEmitter<number>();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getAllProducts().subscribe((data) => {
      this.products = data;
      this.totalPrice = 0;

      this.products.forEach((product) => {
        this.totalPrice += product.price * product.quantity;
        this.totalPrice.toFixed(2);
      });

      this.getTotalPrice();
    });
  }

  getTotalPrice(): void {
    this.totalPriceEvent.emit(this.totalPrice);
  }
}
