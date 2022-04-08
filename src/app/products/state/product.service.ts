import { Injectable } from '@angular/core';
import { ID, OrArray } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Product } from './product.model';
import { ProductsStore } from './products.store';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private productsStore: ProductsStore, private http: HttpClient) {
    this.get();
  }

  get() {
   this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(
        tap(products => this.productsStore.update({products}))).subscribe()}

  setFilter(filter : string) {
    this.productsStore.update({filter})
  }
  
// filter(category: string) {
//   this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(
//   tap(products => products.filter(product => product.category === category))).this.productsStore.update({products}))).subscribe()}

// .pipe(
  //     map(products => products.filter(x => x.category === category))
  //     )

  // add(product: Products) {
  //   this.productsStore.add(product);
  // }

  // update(id: OrArray<number> | null, product: Partial<Products>) {
  //   this.productsStore.update(id, product);
  // }

  // remove(id: ID) {
  //   this.productsStore.remove(id);
  // }
}
