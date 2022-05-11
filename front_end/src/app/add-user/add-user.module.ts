import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddUserComponent } from './add-user.component';
import { AddUserRoutingModule } from './add-user-routing.module';
import { UserService } from '../Services/user.service';
import { SearchForUserComponent } from './search-for-user/search-for-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    AddUserComponent,
    SearchForUserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AddUserRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AddUserComponent]
})
export class AddUserModule { }
