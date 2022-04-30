import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CartStore } from './cart/state/cart.store';
import { UserService } from './signup/state/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public username$: string | null = null;

  title: any;
  public totalItemsLS: any | undefined;

  constructor(
    private userService: UserService,
    private cartStore: CartStore,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.username$ = JSON.parse(localStorage.getItem('LoggedIn') as string);
    this.userService.setUser(this.username$);

    this.totalItemsLS = localStorage.getItem('cart products');

    if (this.totalItemsLS) {
      this.cartStore.update((state) => {
        return { ...state, cart: JSON.parse(this.totalItemsLS) };
      });
    }  
  }
}
