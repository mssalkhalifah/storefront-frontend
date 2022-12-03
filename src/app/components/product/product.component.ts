import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() id = '0';
  @Input() name = 'placeholder';
  @Input() price = '0';
  @Input() imageUrl = '../../assets/placeholder600800.png';
  @Input() quantity: string | number = 1;
  @Input() hideAddToCartButtonVisbility = false;
  @Input() disableQuantityInput = false;

  constructor(private cartService: CartService) {}

  onAddToCart() {
    const product: Product = {
      id: +this.id,
      name: this.name,
      price: +this.price,
      url: this.imageUrl,
      quantity: +this.quantity,
      description: '',
    };

    this.cartService.addProduct(product);
    alert('Added to cart');
  }
}
