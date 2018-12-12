import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Employee } from '../shared/employee';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  show: boolean = false;
  employees: Employee[];

  constructor(private http: HttpClient, public data:DataService) { 
    
    
  }
  
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(): void {
    this.data.getEmployees()
    .subscribe(data => {
      this.employees = data;
      console.log(data)
    });
  }
  register(){
    this.show = true
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.data.addEmployee({ name } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
      this.show = false
  }


  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
    this.data.deleteEmployee(employee).subscribe();
  }
  
  
}

