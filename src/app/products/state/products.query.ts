import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import {map, Observable} from "rxjs";
import {Products} from "./products.model";
import { ProductsState, ProductsStore } from './products.store';


@Injectable({ providedIn: 'root' })
export class ProductsQuery extends Query<ProductsState> {

  selectProducts$: Observable<Products[]> = this.select('products');
  selectNumItemsOfProducts$: Observable<number> = this.selectProducts$.pipe(
    map((items: Products[]) => items.length)
  )

  constructor(protected override store: ProductsStore) {
    super(store);
  }



}
