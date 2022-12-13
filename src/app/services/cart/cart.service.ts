import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../product/product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: BehaviorSubject<Product[]>;
  private confirmed = false;

  constructor() {
    this.cart = new BehaviorSubject<Product[]>([]);
  }

  addProduct(product: Product): Product {
    const products = this.cart.value;
    products.push(product);

    this.cart.next(products);

    return product;
  }

  getAllProducts(): Observable<Product[]> {
    return this.cart.asObservable();
  }

  removeItem(product: Product): boolean {
    const products = this.cart.value;
    const index = products.indexOf(product);

    if (index !== -1) {
      products.splice(index, 1);
      this.cart.next(products);

      return true;
    }

    return false;
  }

  getConfirmation(): boolean {
    return this.confirmed;
  }

  setConfirmation(value: boolean): boolean {
    this.confirmed = value;

    return this.confirmed;
  }

  clearCart(): boolean {
    this.cart.next([]);

    return true;
  }
}
