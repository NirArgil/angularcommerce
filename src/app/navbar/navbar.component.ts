import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartQuery } from '../cart/state/cart.query';
import { CartStore } from '../cart/state/cart.store';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class NavbarComponent implements OnInit {

  public username: string | null | undefined;
  public totalItems : number = 0;

  constructor(private authService: AuthService, private cartQuery: CartQuery, private cartStore: CartStore) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => this.username = user)

    this.cartQuery.select('cart').subscribe(res => this.totalItems = res.length)
  }

  loggedinUser() {
    if (localStorage.getItem('LoggedIn')) {
      return true;
    }
  }

  logout() {
    this.authService.logout();
  }

}
