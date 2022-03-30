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

    materials:Material[];

    search_key:string;
    

  constructor(private materialService:MaterialService, private router:Router) { 


  }

  ngOnInit(): void {

    this.GetAllMaterials();
     
}

search(){

  console.log(this.search_key);
  

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

GetAllMaterials(){
  this.materialService.GetAllMaterials().subscribe(
    (response:Material[]) => {
      this.materials = response;
    }
  );
}

deleteMaterial(i:number){
  this.materialService.deleteMaterial(this.materials[i].id); 
  this.GetAllMaterials();
}

details(i:number){
  this.router.navigate(['/materials/details'],{queryParams: {id : this.materials[i].id}});
}
}
