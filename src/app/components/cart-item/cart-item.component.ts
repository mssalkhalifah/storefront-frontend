import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() id = '0';
  @Input() imageUrl = '../../../assets/placeholder600800.png';
  @Input() name = 'loading...';
  @Input() price: number | string = 'loading...';
  @Input() quantity: number | string = 'loading...';
}
