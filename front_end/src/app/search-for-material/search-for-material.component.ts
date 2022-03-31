import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../Services/material.service';
import { Router } from '@angular/router';
import { Material } from '../material';


@Component({
  selector: 'app-search-for-material',
  templateUrl: './search-for-material.component.html',
  styleUrls: ['./search-for-material.component.css']
})
export class SearchForMaterialComponent implements OnInit {

// materials array contains material that will show in the page 
//  search_key the search value entered by the user
    materials:Material[];

    search_key:string;
    

  constructor(private materialService:MaterialService, private router:Router) { 


  }

  ngOnInit(): void {

    // in initial we call all materials to displayed in page
    this.GetAllMaterials();
     
}


// get all materials from backend and store it in materials array
GetAllMaterials(){
  this.materialService.GetAllMaterials().subscribe(
    (response:Material[]) => {
      this.materials = response;
    }
  );
}


// search method will send the search to the server and get related materials when user press enter
// if the search value is empty all materials will displayed
search(){

  if(this.search_key !== ""){
    this.materialService.searchForMaterial(this.search_key).subscribe(
      (response:Material[]) => {
        this.materials = response;
      }
    );
  }else{
    this.GetAllMaterials();
  }
  
  
}


// delete material by it`s id
deleteMaterial(i:number){
  this.materialService.deleteMaterial(this.materials[i].id); 
  this.GetAllMaterials();
}

// send the material id to the details component
details(i:number){
  this.router.navigate(['/materials/details'],{queryParams: {id : this.materials[i].id}});
}
}
