import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { SearchForMaterialComponent } from './search-for-material.component';
import { SearchForMaterialRoutingModule } from './search-for-material-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialService } from '../Services/material.service';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    SearchForMaterialComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SearchForMaterialRoutingModule,
    FormsModule
    
  ],
  providers: [MaterialService],
  bootstrap: [SearchForMaterialComponent]
})
export class SearchForMaterialModule { }
