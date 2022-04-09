import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, debounceTime } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Product } from '../products/state/product.model';
import { ProductsQuery } from '../products/state/products.query';

/**
 * @title Filter autocomplete
 */

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@Injectable({
  providedIn: 'root',
})
export class SearchboxComponent implements OnInit {
@Input() myControl: FormControl | undefined
@Input() options: any[] | undefined | null;

  filteredOptions: Observable<Product[]> | undefined;

 arrayOptions: Observable<string[]> | undefined;

  // products$: Observable<Product[]>;

  // public newProductList = new BehaviorSubject<any>([]);
  // public newProductList = new BehaviorSubject<any>([]);

  constructor() {
    // this.products$ = this.productsQuery.select('products');
  }

  ngOnInit(): void {

    // this.products$.subscribe((products) => this.productListNew.next(products));
    // this.products$.subscribe((res: any) => {
    //   this.newProductList.next(res.map((item) => item));

    //   console.log(this.newProductList.value);
    // });

    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   // debounceTime(3000),
    //   startWith({title: ''}),
    //   map((value) => this._filter(value.title))
    // );
  }

  displayFn(state) {
    return state.title;
  }
  // private _filter(value: string): Product[] {
  //   const filterValue = value.toLowerCase();

  //   return this.newProductList.value.filter((option) =>
  //     option.title.toLowerCase().includes(filterValue)
  //   );
  // }
}
