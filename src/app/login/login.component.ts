import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { CartStore } from '../cart/state/cart.store';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  formGroup = new FormGroup({
    email: new FormControl(undefined, [Validators.required]),
    password: new FormControl(
      undefined,
      Validators.compose([Validators.required, Validators.minLength(4)])
    ),
  });

  auth: boolean | undefined;
  public loggedUser: string | undefined | null;
  
  // public total = new BehaviorSubject<any>([]);

  constructor(
    private data: DataService,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private cartStore: CartStore
  ) {}

  ngOnInit(): void {
      this.authService.getUser().subscribe(user => this.loggedUser = user);
    
  }

  onSubmit() {
    this.http.get<any>('https://my-json-server.typicode.com/NirArgil/angulardb/users').subscribe({
      next: (res) => {
        let verifiedUser = res.find((a: any) => {
          return (
            a.email === this.formGroup.value.email &&
            a.password === this.formGroup.value.password
          );
        });
        if (verifiedUser) {
          alert('Login success');
          localStorage.setItem('LoggedIn', this.formGroup.value['email']);
          this.authService.login(this.formGroup.value['email']);
    
          // his.total.next(localStorage.getItem('cart products'))
          // this.total.value.pipe(
          //   tap(t =>this.cartStore.update({t}))
          // )

          // console.log(this.total.value);t

          // this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(
          //   tap(products => this.productsStore.update({products}))).subscribe()}

         

          this.router.navigateByUrl('/home');

          this.formGroup.reset();
        } else {
          alert('User not found');
        }
      },
      error: () => {
        alert('Something went wrong');
      },
    });
  }

  isLoggedIn() {
    console.log(this.authService.getUser());
    
  }
}
