import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params }from '@angular/router';
import { MaterialService } from 'src/app/Services/material.service';
import { Material } from 'src/app/material';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:number;

  material:Material;

  constructor(private route:ActivatedRoute, private materialService:MaterialService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params:Params) => {
      this.id = params['id'];
     });


    //  get the material details to desplay in page
     this.materialService.getMaterialById(this.id).subscribe(
      (response:Material) => {
        console.log(response);
        
        this.material = response;
      }
    )
  }

}
