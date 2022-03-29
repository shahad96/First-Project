import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddMaterialRoutingModule } from './add-material-routing.module';
import { AddMaterialComponent } from './add-material.component';
import {HttpClientModule} from '@angular/common/http';
import { MaterialService } from '../Services/material.service';


@NgModule({
  declarations: [
    AddMaterialComponent
  ],
  imports: [
    BrowserModule,
    AddMaterialRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MaterialService],
  bootstrap: [AddMaterialComponent]
})
export class AddMaterialModule { }
