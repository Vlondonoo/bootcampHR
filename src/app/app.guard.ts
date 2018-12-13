import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {

  constructor (private http: HttpClient, private route: Router) {}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAuthenticated();
  }

  isAuthenticated() {
    const userLogged = localStorage.getItem('user');
    // console.log(userLogged, 'DATA TO SHOWN');

    // console.log(userLogged);
    if ( !userLogged ) {
      this.route.navigate(['/login']);
    }

    return userLogged ? true : false;
  }
}
