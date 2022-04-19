import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { SearchPipe } from '../shared/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SearchboxModule } from '../searchbox/searchbox.module';
import { MatInputModule } from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    ProductsComponent
  ],  
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    MatAutocompleteModule,
    SearchboxModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatInputModule,
  ],
})

export class ProductsModule {}
