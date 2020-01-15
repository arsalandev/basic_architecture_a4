/**
 * Created by devmubeen on 12/9/17.
 */
import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private _cookieService : CookieService) { }

  canActivate() {
    if (localStorage.getItem('currentUser') && this._cookieService.get("access_token")) {
        return true;


    }
    // not logged in so redirect to login page
    this.router.navigate(['/welcome/home']);
    return false;
  }

}
