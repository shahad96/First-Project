import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import {Injectable } from '@angular/core'

@Injectable()
export class MaterialService{


    constructor(private http: HttpClient){}

    AddMaterial(form:FormGroup ){
        this.http.post('http://localhost:8080/post-material',form.value).subscribe();
    }
    
}