import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { AuthService } from './services/auth.service';
import { UserQuery } from './signup/state/user.query';
import { UserService } from './signup/state/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private userQuery: UserQuery) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.userQuery.select('user').pipe(map((user) => !!user));
  }
}