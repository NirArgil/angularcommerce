import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

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
  public filterCategory: any;
  public filteredProducts$: any = [];
  public totalItem: number = 0;
  public searchTerm !: string;

  public menFashion$ = new BehaviorSubject<any>([]);;

  breakpoint: number | undefined;
  searchKey: string = "";

  selectProducts$: Observable<Product[]> | undefined
  filtered$: Observable<Product[]> | undefined
  selectNumItemsOfProducts$: Observable<Number> | undefined

  constructor(private api: ApiService, private cartService: CartService, private productService: ProductsService, private productsQuery: ProductsQuery) {}
  
  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 460) ? 1 : (window.innerWidth <= 750) ? 2 : 3;
   
    this.productService.get();
    this.selectProducts$ = this.productsQuery.select('products');

    this.selectProducts$.subscribe((products) => this.filteredProducts$ = products.filter((a: any) => a.category == "men's clothing"));
    console.log(this.filteredProducts$);
    
    // this.menFashion$.next(this.selectProducts$.subscribe((products) => products.filter((a: any) => a.category == "men's clothing")));
    
    this.cartService.getProducts().subscribe((res) => this.totalItem = res.length)

    // this.selectProducts$.subscribe((res: any) => {
    //   this.productList = res;
    //   this.productList.forEach((a: any) => {
    //     if (
    //       a.category === "women's clothing" ||
    //       a.category === "men's clothing"
    //     ) {
    //       a.category = 'fashion';
    //     }
    //     Object.assign(a, { quantity: 1, total: a.price });
    //   });
    //   console.log(this.productList);
    // });
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 460) ? 1 : (event.target.innerWidth <= 750) ? 2 : 3;
  }

  addtocart(item: object) {
    this.cartService.addtoCart(item);
  }

  // filter(category: string){
  //   this.selectProducts$?.pipe(
  //     map(products => products.filter(x => x.category === category))
  //     )
  //   }

    filter(category: string) {
     this.selectProducts$?.pipe(
      map((items: Product[]) => items.filter(x => x.category === category))
    )}

  // filter(category: string) {
  //   this.selectProducts$ = this.productList.filter((a: any) => {
  //     if (a.category == category || category == '') {
  //       return a;
  //     }
  //   });
  // }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

}