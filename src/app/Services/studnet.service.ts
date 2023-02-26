import { Studnet } from './../Models/Studnet';
import { SharedServicesService } from './shared-services.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudnetService  extends SharedServicesService<Studnet> {

  constructor(public http : HttpClient) { 
    super(http ,  "http://localhost:3000/student")
  }
}
