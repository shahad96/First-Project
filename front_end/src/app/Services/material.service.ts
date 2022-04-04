import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Material } from '../material';

// this service contine all http requset from materials table
@Injectable()
export class MaterialService{

    constructor(private http: HttpClient){}

    // for adding new material to the database we send form 
    // to AddMaterial method and send(post) the form.value to the backend
    AddMaterial(form:FormGroup){
        this.http.post('http://localhost:8080/material/post',form.value).subscribe();
        
    }

    // GetAllMaterials method evoke all materials to display 
    GetAllMaterials(){
       return this.http.get<Material[]>('http://localhost:8080/material/all-materials');
    }

    // GetAllMaterials method evoke materials that have the search value in the title to display
    searchForMaterial(key:string){
        return this.http.get<Material[]>(`http://localhost:8080/material/search/${key}`);
    }

    // deleteMaterial method used to delete specific material by its id
    deleteMaterial(id:number){
        return this.http.delete<Material[]>(`http://localhost:8080/material/delete/${id}`);
    }

    // deleteMaterial method used to get specific material by its id
    getMaterialById(id:number){
        return this.http.get<Material>(`http://localhost:8080/material/${id}`);
    }

    // update material info
    updateMaterial(form:FormGroup,id:number){
        this.http.put(`http://localhost:8080/material/update/${id}`,form.value).subscribe();
    }
    
    
}