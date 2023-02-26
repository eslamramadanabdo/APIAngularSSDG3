import { Router } from '@angular/router';
import { Doctor } from './../../Models/Doctor';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent  {

  doctor : Doctor = new Doctor();

  constructor(  public serv : DoctorService , public route : Router  ) { }


  post(){
    this.serv.post( this.doctor  ).subscribe( (data:Doctor)=>{
      this.route.navigateByUrl('/doctor/list');
    });
  }

}
