import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserstableComponent } from './AdminUsersProject/Components/userstable/userstable.component';
import { LoginComponent } from './AdminUsersProject/Components/login/login.component';
import { RolestableComponent } from './AdminUsersProject/Components/rolestable/rolestable.component';
import { LoggitorroutingComponent} from './AdminUsersProject/Components/loggitorrouting/loggitorrouting.component';


const routes: Routes = [
  {path: 'users', component: UserstableComponent},
  {path: 'home', component: UserstableComponent},
  {path: '', component: LoginComponent},
  {path: 'loggitor', component: LoggitorroutingComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
