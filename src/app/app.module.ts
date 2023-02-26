import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { NavebarComponent } from './shared/navebar/navebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './student/list/list.component';
import { AddComponent } from './student/add/add.component';
import { EditComponent } from './student/edit/edit.component';
import { AdddoctorComponent } from './doctor/adddoctor/adddoctor.component';
import { ListdoctorComponent } from './doctor/listdoctor/listdoctor.component';
import { EditdoctorComponent } from './doctor/editdoctor/editdoctor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavebarComponent,
    FooterComponent,
    HomeComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    AdddoctorComponent,
    ListdoctorComponent,
    EditdoctorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
