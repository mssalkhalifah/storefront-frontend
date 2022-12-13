import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  cartForm: FormGroup;

  constructor(private cartService: CartService) {
    this.cartForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      creditCardNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
    });
  }

  ngOnInit(): void {
    this.cartService.getAllProducts().subscribe((data) => {
      this.products = data;

      this.products.forEach((product) => {
        this.totalPrice += product.price * product.quantity;
        this.totalPrice.toFixed(2);
      });
    });
  }
}
