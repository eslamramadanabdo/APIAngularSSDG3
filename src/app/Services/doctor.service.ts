import { SharedServicesService } from 'src/app/Services/shared-services.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../Models/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService  extends SharedServicesService<Doctor> {

  constructor( public http : HttpClient) {
    super(http , "http://localhost:3000/doctor");
  }
}
