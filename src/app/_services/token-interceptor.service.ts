import {Injectable, Type} from '@angular/core';
import {CookieService} from "angular2-cookie/core";
import {tokenNotExpired} from "angular2-jwt";
import {HttpEvent, HttpHandler, HttpRequest, HttpInterceptor} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(public auth: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`,
      },

    });

    return next.handle(request);
  }



}