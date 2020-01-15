import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";
import { CookieService } from "angular2-cookie/core";
import { AppConfig } from "../_utilities/app-config";
@Injectable()
export class AuthenticationService {

  baseUrl: string = AppConfig.API_ENDPOINT;
  requestHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private _cookieService: CookieService) { }

  login(email, password) {
    return this.http.post<any>(this.baseUrl + 'auth', {
      email : email,
      password : password
    }, { headers: this.requestHeaders }).map(response => {
       let data = response;
      if(data){
        if (data.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          //let user = data.user;
          let token = data.access_token;
          this._cookieService.put("access_token", token);
          localStorage.setItem('id_token', token);

          return true;
        }
        else {
          return false;
        }
      }
      else{
        console.log("login error");
      }

      return response;
    });
  }
  registerUser(data: any) {
    return this.http.post<any>(this.baseUrl + 'user', data, { headers: this.requestHeaders }).map(response => {
      return response;
    }, error => {
      let data = error;
      console.log(data);
      return error;

    });
  }
  logout() {
    this._cookieService.removeAll();
    localStorage.removeItem('currentUser');
    localStorage.clear();
  }
}
