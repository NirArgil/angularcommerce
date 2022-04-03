import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { FilterPipe } from '../shared/filter.pipe';
import { ProductsRoutingModule } from './products-routing.module';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    ProductsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule
  ],
})
export class ProductsModule {}
