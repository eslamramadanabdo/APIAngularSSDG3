import { AdddoctorComponent } from './doctor/adddoctor/adddoctor.component';
import { EditComponent } from './student/edit/edit.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './student/list/list.component';
import { AddComponent } from './student/add/add.component';
import { ListdoctorComponent } from './doctor/listdoctor/listdoctor.component';
import { EditdoctorComponent } from './doctor/editdoctor/editdoctor.component';


const routes: Routes = [
  {path: '' , component : HomeComponent},
  {path: 'home' , component : HomeComponent},
  {path: 'student/list' , component: ListComponent},
  {path: 'studnet/add' , component: AddComponent},
  {path : 'student/edit/:id' , component: EditComponent },

  {path: 'doctor/list' , component: ListdoctorComponent},
  {path: 'doctor/add' , component: AdddoctorComponent},
  {path: 'doctor/edit/:id' ,  component : EditdoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
