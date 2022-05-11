import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-for-user',
  templateUrl: './search-for-user.component.html',
  styleUrls: ['./search-for-user.component.css']
})
export class SearchForUserComponent implements OnInit {

    users:User[];

    search_key:string;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.GetUsers();
  }


  // get all users
GetUsers(){
  this.userService.GetUsers().subscribe(
    (response:User[]) => {
      this.users = response;
    }
  );
}


// search method will send the search to the server and get related materials when user press enter
// if the search value is empty all materials will displayed
search(){

  if(this.search_key !== ""){
    this.userService.searchForUser(this.search_key).subscribe(
      (response:User[]) => {
        this.users = response;
      }
    );
  }else{
    this.GetUsers();
  }
  
  
}


// delete user by it`s id and return all remaining materials
deleteUser(i:number){
  this.userService.deleteUser(this.users[i].id).subscribe(
    (response:User[]) => {
      this.users = response;
    }
  ); 
  
}

// send the user id to the details component
details(i:number){
  this.router.navigate(['/details-user'],{queryParams: {id : this.users[i].id}});
}

// send the material id to the update component
update(i:number){
  // this.router.navigate(['/materials/update'],{queryParams: {id : this.materials[i].id}});
}

}
