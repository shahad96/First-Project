import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SearchForMaterialComponent } from './search-for-material.component';
import { SearchForMaterialRoutingModule } from './search-for-material-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialService } from '../Services/material.service';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    SearchForMaterialComponent,
    DetailsComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SearchForMaterialRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [MaterialService],
  bootstrap: [SearchForMaterialComponent]
})
export class SearchForMaterialModule { }
