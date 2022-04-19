import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ProductsState, ProductsStore } from './products.store';


@Injectable({ providedIn: 'root' })
export class ProductsQuery extends Query<ProductsState> {

  constructor(protected override store: ProductsStore) {
    super(store);
  }
}