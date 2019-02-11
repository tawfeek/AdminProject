import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserstableComponent } from './AdminUsersProject/Components/userstable/userstable.component';
import { LoginComponent } from './AdminUsersProject/Components/login/login.component';

const routes: Routes = [
  {path: '', component: UserstableComponent},
  {path: 'login', component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
