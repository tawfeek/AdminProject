import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserstableComponent } from '../app/AdminUsersProject/Components/userstable/userstable.component';

import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import * as Material from '@angular/material';
import {UserService} from '../app/AdminUsersProject/Services/user.service';
import { NewuserComponent } from './AdminUsersProject/Components/newuser/newuser.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from './AdminUsersProject/Components/login/login.component';
import {LoginService} from './AdminUsersProject/Services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    UserstableComponent,
    NewuserComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Material.MatTableModule,
    Material.MatSortModule,
    Material.MatPaginatorModule,
    Material.MatDialogModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatFormFieldModule,
    Material.MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    Material.MatSnackBarModule

  ],
  providers: [UserService, NewuserComponent, LoginService, { provide: MatDialogRef, useValue: {} },
  { provide: MAT_DIALOG_DATA, useValue: [] }],

  bootstrap: [AppComponent],
  entryComponents: [NewuserComponent]
})
export class AppModule { }




