import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from './../../Services/doctor.service';
import { Doctor } from './../../Models/Doctor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editdoctor',
  templateUrl: './editdoctor.component.html',
  styleUrls: ['./editdoctor.component.css']
})
export class EditdoctorComponent  {
  doctor : Doctor = new Doctor();
  id;
  constructor(  public serv : DoctorService , public active : ActivatedRoute , public route: Router  ) {
  this.id =   this.active.snapshot.paramMap.get('id');

  this.serv.getById(this.id).subscribe( (data :Doctor)=>{
    this.doctor = data;
  } );
  }


  update(){
    this.serv.update(this.id , this.doctor).subscribe( (data:Doctor)=>{
      this.route.navigateByUrl('/doctor/list');
    } );
  }



}
