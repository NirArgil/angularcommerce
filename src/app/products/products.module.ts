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
import { FormsModule } from '@angular/forms';

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
    FormsModule
  ],
})
export class ProductsModule {}
