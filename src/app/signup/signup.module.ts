import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './signup.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule
  ]
})
export class SignupModule { }
