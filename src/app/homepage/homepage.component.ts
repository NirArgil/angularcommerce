import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {

  username: string | null = null;
  public totalItem : number = 0;
  
  constructor(private authService: AuthService, private cartService : CartService) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('LoggedIn') as string;
    this.authService.setUser(this.username);

    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
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
