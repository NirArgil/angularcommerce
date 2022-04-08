import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import {map, Observable} from "rxjs";
import {Product} from "./product.model";
import { ProductsState, ProductsStore } from './products.store';


@Injectable({ providedIn: 'root' })
export class ProductsQuery extends Query<ProductsState> {

  // selectProducts$ = this.select('products');
  // selectNumItemsOfProducts$: Observable<number> = this.selectProducts$.pipe(
  //   map((items: Product[]) => items.length)
  // )

  constructor(protected override store: ProductsStore) {
    super(store);
  }
}

