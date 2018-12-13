import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title ='login';
  urlLogin = './userLogin';
  loginValid;

  constructor( private http: HttpClient, private router: Router ) { }

  ngOnInit() {
  }

  login( username, password) {
    
    const petition = this.http.get(this.urlLogin);
    let userList;
    let isValid;

    petition.subscribe(
        (response: any) => {
          userList = response;
        },
        null,
        () => {
          isValid = userList.filter(
                      data => data.userName === username && data.password === password
                    );
          
                    
          if ( isValid.length > 0 ) {
            this.loginValid = true;
            localStorage.setItem('user', isValid[0].userName);
            this.router.navigate(['/employees']);
          } else {
            localStorage.clear();
          }

        }

    );
  }

}
