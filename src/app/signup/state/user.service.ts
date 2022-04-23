import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private userStore: UserStore) {
  }
  setUser(user: any) {
    this.userStore.update(state => {
      return {...state, user: user}
    })
  }

  login(user: string) {
    this.setUser(user);
  }

  logout() {
    this.userStore.update(state => {
      return {...state, user: null}
    })
    
    localStorage.removeItem('LoggedIn');
  }
}
