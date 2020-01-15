import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../_services/auth.service';

declare var AOS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private _cookieService: CookieService, private authservice: AuthService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.animation();
    // tslint:disable-next-line: prefer-const
    let access_token = this._cookieService.get('access_token');
    if (access_token) {
      console.log(access_token);
      console.log(this.authservice.isAuthenticated());

      if (this.authservice.isAuthenticated()) {

        console.log('redirecting');
        this.router.navigate(['/user/dashboard']);

      } else {
        console.log('logout out, redirecting to login');
        this.router.navigate(['/user/dashboard']);
      }

    }

  }

  animation()
  // tslint:disable-next-line: one-line
  {
    AOS.init({
      once: true
    });
  }

  ngOnDestroy() {
  }

}
