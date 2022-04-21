import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { SearchboxModule } from '../searchbox/searchbox.module';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { NavbarComponent } from './navbar.component';
import { SignupModule } from '../signup/signup.module';
import { LoginModule } from '../login/login.module';
import { ProductsModule } from '../products/products.module';
import { ContactusModule } from '../contactus/contactus.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    MatAutocompleteModule,
    // SearchboxModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatInputModule,

    SignupModule,
    LoginModule,
    ProductsModule,
    ContactusModule,

    RouterModule
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
