import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserStore } from './user.store';
import { UserQuery } from './user.query';
import { User } from './user.model';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Injectable({ providedIn: 'root' })
export class UserService {
  public loggedUser: User | undefined | null;

  constructor(
    private userStore: UserStore,
    private userQuery: UserQuery,
    private socialAuthService: SocialAuthService
    ) {
    this.userQuery.select('user').subscribe((user) => this.loggedUser = user);
  }

  setUser(user: any) {
    this.userStore.update(state => {
      return {...state, user: user}
    })
  }
  // this.userProducts$ = this.cartQuery.select('user');

  // setProductsOfUser(item: any) {
  //   this.userStore.update(state => {
  //     return {...state, user.products: item}
  //   })
  // }

  login(user: string) {
    this.setUser(user);
    localStorage.setItem('LoggedIn', JSON.stringify(this.loggedUser))
  }

  logout() {
    this.userStore.update(state => {
      return {...state, user: null}
    })

    this.socialAuthService.signOut()
    
    localStorage.removeItem('LoggedIn');
  }
}
