import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { User } from '../user';

// this service contine all http requset from materials table
@Injectable()
export class UserService{

    constructor(private http: HttpClient){}

    // for adding new user to the database
    AddUser(form:FormGroup){
        this.http.post('http://localhost:8080/user/post',form.value).subscribe();
        
    }

    // evoke all users to display 
    GetUsers(){
       return this.http.get<User[]>('http://localhost:8080/user/get');
    }

    // search for user by the key, the key can be part of the name or username or email
    searchForUser(key:string){
        return this.http.get<User[]>(`http://localhost:8080/user/search/${key}`);
    }

    // update user status to deleted
    deleteUser(id:number){
        return this.http.delete<User[]>(`http://localhost:8080/user/delete/${id}`);
    }

    // get specific user by its id
    getUserById(id:number){
        return this.http.get<User>(`http://localhost:8080/user/${id}`);
    }

    // update material info
    // updateMaterial(form:FormGroup,id:number){
    //     this.http.put(`http://localhost:8080/material/update/${id}`,form.value).subscribe();
    // }
    
    
}