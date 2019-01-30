import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserstableComponent } from '../app/AdminUsersProject/Components/userstable/userstable.component';

import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import {MatToolbarModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatDialogModule} from '@angular/material';
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
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [UserService, NewuserComponent],
  bootstrap: [AppComponent],
  entryComponents: [NewuserComponent]
})
export class AppModule { }




