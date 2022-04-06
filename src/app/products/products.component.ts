import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { ProductsService } from './state/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  public productList: any;
  public filterCategory: any;
  public totalItem: number = 0;
  public searchTerm !: string;

  breakpoint: number | undefined;
  searchKey:string = "";

  constructor(private api: ApiService, private cartService: CartService, private productService: ProductsService) {}

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 460) ? 1 : (window.innerWidth <= 750) ? 2 : 3;

    this.productService.get().subscribe((res: any) => {
      this.productList = res;
      this.filterCategory = res;
      // this.productList.forEach((a: any) => {
      //   if (
      //     a.category === "women's clothing" ||
      //     a.category === "men's clothing"
      //   ) {
      //     a.category = 'fashion';
      //   }
      //   Object.assign(a, { quantity: 1, total: a.price });
      // });
      console.log(this.productList);
    });

    // this.cartService.getProducts().subscribe((res) => {
    //   this.totalItem = res.length;
    // });
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 460) ? 1 : (event.target.innerWidth <= 750) ? 2 : 3;
  }

  addtocart(item: object) {
    this.cartService.addtoCart(item);
  }

  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

}