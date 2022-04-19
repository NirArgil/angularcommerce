import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import {
  map,
  Observable,
  startWith,
  switchMap,
} from 'rxjs';

import { ProductsService } from './state/product.service';
import { Product } from './state/product.model';
import { ProductsQuery } from './state/products.query';
import { FormControl } from '@angular/forms';

//cartState
import { CartService } from '../cart/state/cart.service';
import { CartQuery } from '../cart/state/cart.query';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  myControl = new FormControl('');

  public productList: any;

  public filteredProducts$: Observable<Product[]> | undefined;

  public totalItems: number = 0;
  public searchTerm!: string;

  breakpoint: number | undefined;

  products$: Observable<Product[]>;
  selectedFilter$: Observable<string | null>;

  cart$: Observable<Product[]> | null;

  constructor(
    private cartService: CartService,
    private productService: ProductsService,
    private productsQuery: ProductsQuery,
    private cartQuery: CartQuery
  ) {
    this.products$ = this.productsQuery.select('products');
    this.selectedFilter$ = this.productsQuery.select('filter');
    this.cart$ = this.cartQuery.select('cart')
  }

  ngOnInit(): void {

    this.breakpoint = window.innerWidth <= 460 ? 1 : window.innerWidth <= 750 ? 2 : 3;
    
    this.cart$?.subscribe(res => this.totalItems = res.length)
   
    this.products$.subscribe((res: any) => {
      this.productList = res;

      this.productList.forEach((a: any) => {
        if (
          a.category === "women's clothing" ||
          a.category === "men's clothing"
        ) {
          a.category = 'fashion';
        }
        Object.assign(a, { quantity: 1, total: a.price });
      });
      console.log(this.productList);
    });

    this.filteredProducts$ = this.products$.pipe(
      switchMap((products: any[]) =>
        this.selectedFilter$.pipe(
          map((filter: string | null) => {
            if (!filter) {
              return products;
            }
            
            return products.filter((product) => product.category === filter);
          })
        )
      ),
      switchMap((products) =>
        this.myControl.valueChanges.pipe(
          startWith(''),
          map((searchTerm) => {
          
            return products.filter((product) =>
              product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
          })
        )
      )
    );
  }

  onResize(event: any) {
    this.breakpoint =
      event.target.innerWidth <= 460
        ? 1
        : event.target.innerWidth <= 750
        ? 2
        : 3;
  }

  addtocart(item: object) {
    this.cartService.addtoCart(item); 
  }

  setFilter(filter: string) {
    this.productService.setFilter(filter);
  }
}
