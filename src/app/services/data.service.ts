import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private authSource  = new BehaviorSubject<boolean>(false);
  currentAuth = this.authSource.asObservable();

  constructor() { }

  changeAuthStatus(auth: boolean) {
    this.authSource.next(auth)
  }
}
