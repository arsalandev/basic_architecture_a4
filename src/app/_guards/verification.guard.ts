import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class VerificationGuard implements CanActivate {

  constructor(private router: Router, private _cookieService : CookieService) { }

  canActivate() {
    if (localStorage.getItem('currentUser') && this._cookieService.get("token")) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser.status == "0"){
          return true;
        }
    }
    // not logged in so redirect to login page
    this.router.navigate(['/user/dashboard']);
    return false;
  }

}
