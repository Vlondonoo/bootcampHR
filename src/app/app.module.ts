import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MyMaterialModule } from './my-material/my-material.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeesdataService } from './shared/employeesdata.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeesComponent,
    ProjectsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    MyMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,    
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(EmployeesdataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
