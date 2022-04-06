import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { Products } from './products.model';

export interface ProductsState {
  products: Products[]
}

export function createInitialState(): ProductsState {
  return {
    products: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class ProductsStore extends Store<ProductsState> {
  set(entities: Products[]): void {
    throw new Error('Method not implemented.');
  }

  constructor() {
    super(createInitialState());
  }
}
