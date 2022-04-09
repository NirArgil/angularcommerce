import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { SearchPipe } from '../shared/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SearchboxComponent } from './searchbox.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    SearchboxComponent,
    // SearchPipe
  ],  
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    ShareButtonsModule,
    ShareIconsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    // MatIconModule,
    // MatInputModule,
    // MatAutocompleteModule,
    // MatChipsModule,
    MatFormFieldModule
  ],
  exports: [ SearchboxComponent ]
})

export class SearchboxModule {}
