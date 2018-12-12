import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './shared/employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bootcampHR';
  url = '/app/employees'
  private employees: Employee[];

  constructor(private http: HttpClient) { 
   
    
  }

 

  ngOnInit() {
   
  }

  







}
