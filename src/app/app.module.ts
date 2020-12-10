import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { FormsModule } from '@angular/forms';
import { RestComponent } from './rest/rest.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';
import{NgxPaginationModule} from 'ngx-pagination';
import {​​​​​ HttpClientModule }​​​​​ from'@angular/common/http';
import {​​​​​​​​ BrowserAnimationsModule }​​​​​​​​ from'@angular/platform-browser/animations';
import{​​​​​​​​MatTableModule}​​​​​​​​ from'@angular/material/table';
import{​​​​​​​​MatDialogModule}​​​​​​​​ from'@angular/material/dialog';
import{​​​​​​​​MatFormFieldModule}​​​​​​​​ from'@angular/material/form-field';
import{​​​​​​​​MatInputModule}​​​​​​​​ from'@angular/material/input';
import{​​​​​​​​MatButtonModule}​​​​​​​​ from'@angular/material/button';
import { AdminComponent } from './admin/admin.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FooterComponent } from './footer/footer.component';
import { RemoveBookComponent } from './remove-book/remove-book.component';






@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    routingComponent,
    RestComponent,
    FilterPipe,
    SortPipe,
    AdminComponent,
    AddBookComponent,
    FooterComponent,
    RemoveBookComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ​​​​​​​​MatTableModule,
    ​​​​​​​​MatDialogModule,
    ​​​​​​​​MatFormFieldModule,
    ​​​​​​​​MatInputModule,
    ​​​​​​​​MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
