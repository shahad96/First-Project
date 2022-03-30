import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AddMaterialModule } from './add-material/add-material.module';
import { SearchForMaterialModule } from './search-for-material/search-for-material.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddMaterialModule,
    SearchForMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
