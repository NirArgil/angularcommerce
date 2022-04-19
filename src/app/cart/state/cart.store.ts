import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Product } from 'src/app/products/state/product.model';

export interface CartState {
  cart: Product[];
}

export function createInitialState(): CartState {
  return {
    cart: [],
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cart' })
export class CartStore extends Store<CartState> {
  constructor() {
    super(createInitialState());
  }
}
