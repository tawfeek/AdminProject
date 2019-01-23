import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserstableComponent } from '../app/AdminUsersProject/Components/userstable/userstable.component';
import { Component } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatPaginatorModule} from '@angular/material';
import {UserService} from '../app/AdminUsersProject/Services/user.service';
import { NewuserComponent } from './AdminUsersProject/Components/newuser/newuser.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserstableComponent,
    NewuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }




