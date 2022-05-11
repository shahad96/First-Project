import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user.component';
import { SearchForUserComponent } from './search-for-user/search-for-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes:Routes =[
    {path: "add-user", component: AddUserComponent},
    {path: "search-user", component: SearchForUserComponent},
    {path: "details-user", component: UserDetailsComponent},
    ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AddUserRoutingModule { }