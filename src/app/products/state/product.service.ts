import { Injectable } from '@angular/core';
import { ID, OrArray } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Product } from './product.model';
import { ProductsStore } from './products.store';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private productsStore: ProductsStore, private http: HttpClient) {
    
  }

  get() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products').subscribe(entities => {
        this.productsStore.set(entities);
      });
      
      // .pipe(tap((values) => this.productsStore.set(values)));
  }

  // get(): Observable<Product[]> {
  //   const request = this.http.get('https://fakestoreapi.com/products').pipe(
  //      tap(response => this.productsStore.set(response)
  //   ));

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
