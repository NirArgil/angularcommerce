import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { SearchPipe } from '../shared/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SearchboxModule } from '../searchbox/searchbox.module';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ProductsComponent,
    SearchPipe
  ],  
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    ShareButtonsModule,
    ShareIconsModule,
    FormsModule,
    MatAutocompleteModule,
    SearchboxModule,
    ReactiveFormsModule,

    MatInputModule,
    // MatIconModule,
    // MatInputModule,
    // MatAutocompleteModule,
    // MatChipsModule,
    // MatFormFieldModule
  ],
})

export class ProductsModule {}
