import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MaterialService } from 'src/app/Services/material.service';
import { ActivatedRoute,Params }from '@angular/router';
import { Material } from 'src/app/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id:number;

  material:Material;

  form: FormGroup;

  constructor(private route:ActivatedRoute,private materialService:MaterialService,
    private router:Router) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params:Params) => {
      this.id = params['id'];
     });


     this.materialService.getMaterialById(this.id).subscribe(
      (response:Material) => {
        console.log(response);
        
        this.material = response;

        this.form = new FormGroup({
          'monitor_date' : new FormControl(this.material.monitor_date,Validators.required),
          'language' : new FormControl(this.material.language,Validators.required),
          'section' : new FormControl(this.material.section,Validators.required),
          'url' : new FormControl(this.material.url,Validators.maxLength(100)),
          'author' : new FormControl(this.material.author,Validators.maxLength(50)),
          'file' : new FormControl(this.material.file),
          'title' : new FormControl(this.material.title,[Validators.maxLength(150),Validators.required]),
          'content' : new FormControl(this.material.content,[Validators.maxLength(1000),Validators.required])
        })
      }
    )
  

  }

  Submit(){

    this.materialService.updateMaterial(this.form,this.id);
    this.router.navigate(['/materials']);
  }

}
