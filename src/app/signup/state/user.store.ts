import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { User } from './user.model';

export interface UserState {
  user: User | null;
}

export function createInitialState(): UserState {
  return {
    user: null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class UserStore extends Store<UserState> {
  
  constructor() {
    super(createInitialState());
  }
}
