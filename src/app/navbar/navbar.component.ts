import { SocialAuthService } from '@abacritt/angularx-social-login';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartQuery } from '../cart/state/cart.query';
import { CartStore } from '../cart/state/cart.store';
import { User } from '../signup/state/user.model';
import { UserQuery } from '../signup/state/user.query';
import { UserService } from '../signup/state/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class NavbarComponent implements OnInit {

  public userName: User | null | undefined;
  public totalItems : number = 0;

  constructor(
    private userService: UserService,
    private userQuery: UserQuery,
    private cartQuery: CartQuery,
    private cartStore: CartStore, 
    private socialAuthService: SocialAuthService
    ) { }

  ngOnInit(): void {
    this.userQuery.select('user').subscribe(user => this.userName = user)
    this.cartQuery.select('cart').subscribe(res => this.totalItems = res?.length)
  }

  loggedinUser() {
    // if (localStorage.getItem('LoggedIn')) {
    //   return true;
    // }
    if (this.userName) {
      return true;
    }
  }

  logout() {
      this.userService.logout();
  }
}
