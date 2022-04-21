import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CartStore } from './cart/state/cart.store';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  username$: string | null = null;

  title: any;
  public totalItemsLS: any | undefined;

  constructor( private authService: AuthService, private cartStore: CartStore) {}

  ngOnInit(): void {
    this.username$ = localStorage.getItem('LoggedIn') as string;
    this.authService.setUser(this.username$);

    this.totalItemsLS = localStorage.getItem('cart products');

    this.cartStore.update(state => {
      return {...state, cart: JSON.parse(this.totalItemsLS)}
    })
  }
}