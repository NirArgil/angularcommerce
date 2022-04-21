import { Injectable } from '@angular/core';
import { CartQuery } from './cart.query';
import { CartStore } from './cart.store';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private cartStore: CartStore, private cartQuery: CartQuery) {}

  addtoCart(item: any) {
    this.cartStore.update((state) => {
      return { ...state, cart: [...state.cart, item] };
    });

   this.cartQuery.select('cart').subscribe((result) => console.log(result));
  }

  removeCartItem(product: any) {
    this.cartQuery.select('cart').subscribe((result) => {
      result.map((a: any, index: any) => {
        if (product.id === a.id) {
          result.splice(index, 1);
          localStorage.setItem('cart products', JSON.stringify(result));
        }
      });
    });
  }

  removeAllCart() {
    this.cartStore.update((state) => {
      return { ...state, cart: [] };
    });
  }
}
