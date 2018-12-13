import { Injectable } from '@angular/core';
import { Employee } from './shared/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Project } from './shared/project';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = '/app/employees'
  urlproject = '/app/project'
  employees: Employee[];
  projects: Project[];
  
  constructor(private http: HttpClient) { }
  ngOnInit() {
    //this.getEmployees().subscribe(      
      //data => this.employees = data

    //)
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url)
  }

  addEmployee(employee: Employee): Observable<any> {
    return this.http.post<Employee>(this.url, employee, httpOptions).
    pipe(
      tap((employee: Employee) => {console.log(employee)
        return of("Success")
      }),
      catchError((error) => {   
        console.log(error)
        return of(error)
      })
    )
  }


  deleteEmployee (employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Employee>(url, httpOptions).pipe(
      tap((employee: Employee) => {console.log(employee)
        return of("Success")
      }),
      catchError((error) => {   
        console.log(error)
        return of(error)
      })
    );
  }
  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(this.urlproject)
  }
  

}
