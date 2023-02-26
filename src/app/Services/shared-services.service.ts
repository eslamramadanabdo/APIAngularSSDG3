import { HttpClient } from '@angular/common/http';
import { Inject,  Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Studnet } from '../Models/Studnet';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService<T> {



  constructor(  public http : HttpClient , @Inject(String)  public URL : string ) { }


  get() : Observable<T> {
    return this.http.get<T>(this.URL);
  }

  post(body : T): Observable<T>{
    return this.http.post<T>( this.URL , body );
  }

  delete(id): Observable<T>{
    return this.http.delete<T>(this.URL + `/${id}`);
  }

  getById(id): Observable<T>{
    return this.http.get<T>(this.URL + `/${id}`);
  }

  update(id  , body : T) : Observable<T>{
    return this.http.put<T>(this.URL + `/${id}` , body);
  }
}
