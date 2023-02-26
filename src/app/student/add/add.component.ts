import { Studnet } from './../../Models/Studnet';
import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from 'src/app/Services/shared-services.service';
import { StudnetService } from 'src/app/Services/studnet.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  student : Studnet = new Studnet();



  constructor( public serv : StudnetService ) {  }

  post(){
    this.serv.post( this.student ).subscribe( (data : Studnet)=>{
      window.location.reload();
    });
  }

  
}
