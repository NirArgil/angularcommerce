import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { Product } from './product.model';

export interface ProductsState {
  products: Product[];
}

export function createInitialState(): ProductsState {
  return {
    products: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class ProductsStore extends Store<ProductsState> {
  set(entities: Product[]) {
    throw new Error('Method not implemented.');
  }

  // set(_entities: Product[]) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private productsStore: ProductsStore , private http: HttpClient) {
    super(createInitialState());
  }
}
