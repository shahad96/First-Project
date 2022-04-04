import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MaterialService } from '../Services/material.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {

  form: FormGroup;

  constructor(private materialService:MaterialService,private router:Router) { }

  ngOnInit(): void {
    
    this.form = new FormGroup({
      'monitor_date' : new FormControl(null,Validators.required),
      'language' : new FormControl(null,Validators.required),
      'section' : new FormControl(null,Validators.required),
      'url' : new FormControl(null,Validators.maxLength(100)),
      'author' : new FormControl(null,Validators.maxLength(50)),
      'file' : new FormControl(null),
      'title' : new FormControl(null,[Validators.maxLength(150),Validators.required]),
      'content' : new FormControl(null,[Validators.maxLength(1000),Validators.required])
    })

  }

  Submit(){

    this.materialService.AddMaterial(this.form);
    this.router.navigate(['/materials']);
  }
}
