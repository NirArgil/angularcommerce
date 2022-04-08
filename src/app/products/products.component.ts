import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, defaultIfEmpty, map, mergeMap, Observable } from 'rxjs';

import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { ProductsService } from './state/product.service';
import { Product } from './state/product.model';
import {ProductsQuery} from './state/products.query';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  public productList: any;
  public filteredProducts$: any;

  public totalItem: number = 0;
  public searchTerm !: string;

  breakpoint: number | undefined;
  searchKey: string = "";

  products$: Observable<Product[]>
  selectedFilter$: Observable<string | null>
  // filteredProductsOld$: Observable<string | null>
  
  selectNumItemsOfProducts$: Observable<Number> | undefined

  constructor(private api: ApiService, private cartService: CartService, private productService: ProductsService, private productsQuery: ProductsQuery) {
    this.products$ = this.productsQuery.select('products');
    this.selectedFilter$ = this.productsQuery.select('filter');
  }
  
  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 460) ? 1 : (window.innerWidth <= 750) ? 2 : 3;    
    this.cartService.getProducts().subscribe((res) => this.totalItem = res.length)
    
    this.filteredProducts$ = this.products$.pipe(
      mergeMap((products: any[]) =>
        this.selectedFilter$.pipe(
          map((filter: string | null) => {
            console.log('inside map: ', filter);
            if (!filter) {
              return products;
            }
    
            return products.filter((product) => product.category === filter);
          })
        )
      )
    );

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
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 460) ? 1 : (event.target.innerWidth <= 750) ? 2 : 3;
  }

  addtocart(item: object) {
    this.cartService.addtoCart(item);
  }

  setFilter(filter: string){
    this.productService.setFilter(filter)
  }

search(event:any){
this.searchTerm = (event.target as HTMLInputElement).value;
console.log(this.searchTerm);
this.cartService.search.next(this.searchTerm);
}

}