import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import {map, Observable} from "rxjs";
import { CartState, CartStore } from './cart.store';



@Injectable({ providedIn: 'root' })
export class CartQuery extends Query<CartState> {

  // selectProducts$ = this.select('products');
  // selectNumItemsOfProducts$: Observable<number> = this.selectProducts$.pipe(
  //   map((items: Product[]) => items.length)
  // )

  constructor(protected override store: CartStore) {
    super(store);
  }
}

