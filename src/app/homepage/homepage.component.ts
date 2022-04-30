import { SocialAuthService } from '@abacritt/angularx-social-login';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
 
  constructor(public socialAuthService: SocialAuthService, public router: Router ) {}

  ngOnInit(): void { 
  }

  logout() {
    this.socialAuthService.signOut().then(() => this.router.navigate(['login']));
  }

}
