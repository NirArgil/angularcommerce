import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './homepage.component';
import { NavbarModule } from '../navbar/navbar.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomePageComponent
  ],  
  imports: [
    CommonModule,
    NavbarModule,
    MatButtonModule
  ],
})

export class HomepageModule {}
