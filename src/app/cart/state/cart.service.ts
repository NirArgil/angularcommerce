import { Injectable } from '@angular/core';
import { ID, OrArray } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { CartStore } from './cart.store';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private cartStore: CartStore, private http: HttpClient) {

  }

  // getProducts() {
  //   return this.productList.asObservable();
  // }

  addtoCart(item: any) {
    // this.cartItemList.push(product);
    // this.productList.next(this.cartItemList);
    // this.getTotalPrice();
    // console.log(this.cartItemList);
    // this.cartStore.update({cart})
    this.getTotalPrice();
  }
  
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartStore.cart.map((a: any) => {
      grandTotal += a.price;
    });
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartStore.cart.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartStore.cart.splice(index, 1);
      }
    });
    // this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartStore.cart = [];
    // this.productList.next(this.cartItemList);
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
