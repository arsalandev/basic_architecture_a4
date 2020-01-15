import { Injectable } from '@angular/core';
import {CookieService} from 'angular2-cookie/services';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private _cookieService : CookieService) { }


  public getToken(): string {
    return this._cookieService.get('access_token');
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    console.log(tokenNotExpired(token));
    return tokenNotExpired(token);
    
  }

}