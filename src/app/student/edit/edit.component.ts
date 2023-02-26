import { Studnet } from './../../Models/Studnet';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedServicesService } from 'src/app/Services/shared-services.service';
import { StudnetService } from 'src/app/Services/studnet.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  {

  id; 
  student : Studnet  = new Studnet();
  constructor( public serv : StudnetService, public Active :ActivatedRoute  , public route : Router ) { 
    this.id =  this.Active.snapshot.paramMap.get('id');
  
    this.serv.getById(this.id).subscribe(  (data : Studnet)=>{
      this.student = data;
    } );
  }


  update(id){
    this.serv.update(id , this.student).subscribe( (data :Studnet)=>{
      
      this.route.navigateByUrl("/student/list");
      
    } );
  }

}
