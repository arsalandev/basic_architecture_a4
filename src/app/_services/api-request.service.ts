import { Injectable } from '@angular/core';
import { AppConfig } from "../_utilities/app-config";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map'

@Injectable()
export class ApiRequestService {

  baseUrl : string = AppConfig.API_ENDPOINT;

  constructor(private http: HttpClient) { }

  userApiFunction(data : any)
  {
      return this.http.post<any>(this.baseUrl + 'user', data)
        .map(response => {
          let data = response;
          return data;
        }, error => {
          let data = error;
          console.log(data);
          return error;
        });
  }
   getUserDetails()
   {

      return this.http.get(this.baseUrl + 'get_user')
        .map(res => {
          let user = res;
          console.log(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
           return res;
        });
    }




}
