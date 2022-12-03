import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import {
  Product,
  ProductService,
} from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id? = 0;
  name? = 'placeholder';
  description? = 'placeholder';
  imageUrl? = '../../../assets/placeholder600800.png';
  price?: string | number = 0;
  quantity: number | string = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];

      this.productService.getProducts().subscribe((data) => {
        const product = data.find((product) => product.id === this.id);
        this.id = product?.id;
        this.name = product?.name;
        this.description = product?.description;
        this.imageUrl = product?.url;
        this.price = product?.price;
      });
    });
  }

  onAddToCart() {
    const product: Product = {
      id: Number(this.id) || 0,
      name: this.name || '404',
      price: Number(this.price) || 0,
      url: this.imageUrl || '../../../assets/placeholder600800.png',
      quantity: +this.quantity,
      description: '',
    };

    this.cartService.addProduct(product);
    alert('Added to cart');
  }
}
