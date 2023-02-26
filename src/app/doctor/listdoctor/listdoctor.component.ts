import { Doctor } from './../../Models/Doctor';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-listdoctor',
  templateUrl: './listdoctor.component.html',
  styleUrls: ['./listdoctor.component.css']
})
export class ListdoctorComponent  {

  doctor : Doctor = new Doctor();

  constructor( public serv : DoctorService ) {
    this.serv.get().subscribe(  (data : Doctor)=>{
      this.doctor = data;
    } );
  }


  delete(id){
    this.serv.delete(id).subscribe((data: Doctor)=>{
      window.location.reload();
    });
  }


}
