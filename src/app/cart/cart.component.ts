import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products/state/product.model';
// import { CartService } from '../services/cart.service';
import { CartQuery } from './state/cart.query';
import { CartService } from './state/cart.service';

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

  public totalItemsLS: any | undefined;

  public cartItems: any;
  
  cart$: Observable<Product[]> | undefined;
  
  constructor(private cartService: CartService, private cartQuery: CartQuery) {
    this.cart$ = this.cartQuery.select('cart')
  }

  ngOnInit(): void {
    // this.cartService.getProducts().subscribe((res) => {
    //   this.products = res;
    //   this.totalItem = res.length;
    //   this.grandTotal = this.cartService.getTotalPrice();
    // });
    this.cart$?.subscribe((res) => {
      this.cartItems = res;
      this.totalItemsLS = res;
      this.grandTotal = this.getTotalPrice();
  })  
}

getTotalPrice(): number {
  let grandTotal = 0;
  this.cartItems.map((a: any) => {
    grandTotal += a.price;
  });
  return grandTotal;
}

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptyCart() {
    this.cartService.removeAllCart();
  }
}
