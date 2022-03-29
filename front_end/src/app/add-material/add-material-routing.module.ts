import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddMaterialComponent } from './add-material.component';

const routes:Routes =[
    {path: "add-material", component: AddMaterialComponent}
    ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AddMaterialRoutingModule { }