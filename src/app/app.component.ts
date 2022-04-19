import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  username$: string | null = null;

  title: any;

  constructor( private authService: AuthService) {}

  ngOnInit(): void {
    this.username$ = localStorage.getItem('LoggedIn');
    this.authService.setUser(this.username$);
  }
}