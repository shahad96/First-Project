import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form: FormGroup;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
 this.form = new FormGroup({
      'fullName' : new FormControl(null,[Validators.maxLength(50),Validators.minLength(2),
        Validators.required]),
      'username' : new FormControl(null,[Validators.maxLength(15),Validators.minLength(2),
        Validators.required]),
      'email' : new FormControl(null,[Validators.maxLength(150),Validators.minLength(4),
        Validators.required,Validators.email]),
        'password' : new FormControl(null),
        'status' : new FormControl('نشط')
    })

  }

  Submit(){

    this.form.value.password = this.form.value.username;
    console.log(this.form.value);
    
    this.userService.AddUser(this.form);
    // this.router.navigate(['/materials']);
  }

}
