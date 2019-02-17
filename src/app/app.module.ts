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
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from './AdminUsersProject/Components/login/login.component';
import {LoginService} from './AdminUsersProject/Services/login.service';

import { RolestableComponent } from './AdminUsersProject/Components/rolestable/rolestable.component';
import { RoleService } from './AdminUsersProject/Services/role.service';
import { NewroleComponent } from './AdminUsersProject/Components/newrole/newrole.component';

import { LoggitorroutingComponent } from './AdminUsersProject/Components/loggitorrouting/loggitorrouting.component';



@NgModule({
  declarations: [
    AppComponent,
    UserstableComponent,
    NewuserComponent,
    LoginComponent,

    RolestableComponent,
    NewroleComponent

    LoggitorroutingComponent


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
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    Material.MatSnackBarModule,

  ],
  providers: [UserService, NewuserComponent, LoginService, RoleService, NewroleComponent, { provide: MatDialogRef, useValue: {} },
  { provide: MAT_DIALOG_DATA, useValue: [] }],

  bootstrap: [AppComponent],
  entryComponents: [NewuserComponent, NewroleComponent]
})
export class AppModule { }




