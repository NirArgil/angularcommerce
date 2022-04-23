import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../signup/state/user.model';
import { UserQuery } from '../signup/state/user.query';
import { UserService } from '../signup/state/user.service';

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
  public loggedUser: User | undefined | null;
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private userQuery: UserQuery,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userQuery.select('user').subscribe(user => this.loggedUser = user);
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
          this.userService.login(this.formGroup.value['email']);    

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
}
