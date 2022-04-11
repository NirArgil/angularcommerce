import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ContactusComponent } from './contactus.component';
import { ContactusRoutingModule } from './contactus-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
  declarations: [
    ContactusComponent
  ],
  imports: [
    CommonModule,
    ContactusRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,

    ShareButtonsModule,
    ShareIconsModule,
  ]
})
export class ContactusModule {}
