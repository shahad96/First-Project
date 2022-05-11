import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params }from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id:number;

  user:User;

  constructor(private route:ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params:Params) => {
      this.id = params['id'];
     });


    //  get the user details to desplay in page
     this.userService.getUserById(this.id).subscribe(
      (response:User) => {
        console.log(response);
        
        this.user = response;     
      }
    )

  }

}
