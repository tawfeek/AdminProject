import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserstableComponent } from './AdminUsersProject/Components/userstable/userstable.component';

const routes: Routes = [{path: '', component: UserstableComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
