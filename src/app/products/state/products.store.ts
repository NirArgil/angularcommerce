import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { Product } from './product.model';

export interface ProductsState {
  products: Product[];
  filter: string | null;
  selectedProduct: Product[] | null;
}

export function createInitialState(): ProductsState {
  return {
    products: [],
    filter: null,
    selectedProduct: null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class ProductsStore extends Store<ProductsState> {
  
  constructor() {
    super(createInitialState());
  }
}
