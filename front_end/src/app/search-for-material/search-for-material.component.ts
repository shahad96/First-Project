import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../Services/material.service'


@Component({
  selector: 'app-search-for-material',
  templateUrl: './search-for-material.component.html',
  styleUrls: ['./search-for-material.component.css']
})
export class SearchForMaterialComponent implements OnInit {

  materials:{id:number, monitor_date:string , language:string, section:string,
    url:string, author:string, file:string, title:string, content:string}[];

    search_key:string;
    

  constructor(private materialService:MaterialService) { 


  }

  ngOnInit(): void {

    this.GetAllMaterials();
     
}

search(){

  console.log(this.search_key);
  

  if(this.search_key !== ""){
    this.materialService.searchForMaterial(this.search_key).subscribe(
      (response:any) => {
        this.materials = response;
      }
    );
  }else{
    this.GetAllMaterials();
  }
  
  
}

GetAllMaterials(){
  this.materialService.GetAllMaterials().subscribe(
    (response:any) => {
      this.materials = response;
    }
  );
}

deleteMaterial(i:number){
  this.materialService.deleteMaterial(this.materials[i].id); 
  this.GetAllMaterials();
}
}
