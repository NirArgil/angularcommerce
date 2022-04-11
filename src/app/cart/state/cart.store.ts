import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';


export interface CartState {
  cart: [] | null;
}

export function createInitialState(): CartState {
  return {
    cart: [],
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cart' })
export class CartStore extends Store<CartState> {
  cart: any;
  
  constructor() {
    super(createInitialState());
  }
}
