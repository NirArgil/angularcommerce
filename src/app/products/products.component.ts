import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  defaultIfEmpty,
  map,
  mergeMap,
  Observable,
  startWith,
  switchMap,
  tap,
} from 'rxjs';

import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { ProductsService } from './state/product.service';
import { Product } from './state/product.model';
import { ProductsQuery } from './state/products.query';
import { FormControl } from '@angular/forms';
import { SearchboxComponent } from '../searchbox/searchbox.component';

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
  public selectedProducts$: Observable<Product[]> | undefined;

  public searchFilteredProducts$: any;

  public totalItem: number = 0;
  public searchTerm!: string;

  breakpoint: number | undefined;
  searchKey: string = '';
  searchOption=[]

  products$: Observable<Product[]>;
  selectedFilter$: Observable<string | null>;
  selectedProduct$: Observable<Product[] | null>;


  selectNumItemsOfProducts$: Observable<Number> | undefined;

  constructor(
    private api: ApiService,
    private cartService: CartService,
    private productService: ProductsService,
    private productsQuery: ProductsQuery,
    private searchbox: SearchboxComponent
  ) {
    this.products$ = this.productsQuery.select('products');
    this.selectedFilter$ = this.productsQuery.select('filter');
    this.selectedProduct$ = this.productsQuery.select('selectedProduct')
  }

  ngOnInit(): void {

    this.breakpoint = window.innerWidth <= 460 ? 1 : window.innerWidth <= 750 ? 2 : 3;
    this.cartService.getProducts().subscribe((res) => (this.totalItem = res.length));

    this.searchFilteredProducts$ = this.searchbox.filteredOptions
    
    this.products$.subscribe((res: any) => {
      this.productList = res;

      // this.searchbox.productListNew.next(this.productList);
      // this.searchbox.productListNew.next(this.searchbox.productListNew.value.map(item => item.title));
// console.log(this.searchbox.productListNew.value);

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
            console.log('inside map: ', filter);
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
          }),tap(console.log)
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

  // search(event: any) {
  //   this.searchTerm = (event.target as HTMLInputElement).value;
  //   console.log(this.searchTerm);
  //   this.cartService.search.next(this.searchTerm);
  //   this.products$.subscribe(result => {
  //     result.filter(product => product.category === this.searchTerm)
  //   })
  // }
}
