import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;
  public totalItem: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.totalItem = res.length;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }
}
