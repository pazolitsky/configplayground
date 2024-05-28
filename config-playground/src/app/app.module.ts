import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FilterPaginationTableComponent } from './filter-pagination-table/filter-pagination-table.component'; // Add this import

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    FilterPaginationTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
