import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: number | undefined;
  name? = 'placeholder';
  description? = 'placeholder';
  imageUrl? = '../../../assets/placeholder600800.png';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];

      this.productService.getProducts().subscribe((data) => {
        const product = data.find((product) => product.id === this.id);
        this.name = product?.name;
        this.description = product?.description;
        this.imageUrl = product?.url;
      });
    });
  }
}
