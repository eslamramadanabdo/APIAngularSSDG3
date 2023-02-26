import { Studnet } from './../../Models/Studnet';
import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from 'src/app/Services/shared-services.service';
import { StudnetService } from 'src/app/Services/studnet.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  students  : Studnet;

  constructor( public serv : StudnetService ) { 
      this.serv.get().subscribe( (data : Studnet)=>{
        this.students = data;
      } );
  }

  delete(id){
    this.serv.delete(id).subscribe(  (data:Studnet)=>{
      window.location.reload();
    } );
  }



}
