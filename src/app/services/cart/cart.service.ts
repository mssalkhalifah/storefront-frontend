import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product/product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];

  constructor(private http: HttpClient) {}

  addProduct(product: Product): Product {
    this.cart.push(product);
    return product;
  }

  getAllProducts(): Product[] {
    return this.cart;
  }

  clearCart(): boolean {
    this.cart = [];
    return true;
  }
}
