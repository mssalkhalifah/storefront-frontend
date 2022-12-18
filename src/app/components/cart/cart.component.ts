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
  cartForm: FormGroup;

  constructor(private cartService: CartService) {
    this.cartForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+ [a-zA-Z]+$/),
        Validators.minLength(6),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      creditCardNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{16}$/),
      ]),
    });
  }

  ngOnInit(): void {
    this.cartService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
