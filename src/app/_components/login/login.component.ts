import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterializeAction } from 'angular2-materialize';
import { PasswordValidation } from '../../_utilities/PasswordValidation';
import { AppConfig } from '../../_utilities/app-config';
import { AuthenticationService } from '../../_services/authentication.service';
import { HeaderComponent } from '../components_includes/header/header.component';
import { ApiRequestService } from '../../_services/api-request.service';
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';



declare var AOS: any;
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  currentUser: any = {};
  responseStatus: any = {};
  loading = false;
  registerModalActions = new EventEmitter<string | MaterializeAction>();

  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private authservice: AuthService, private _cookieService: CookieService, private apirequest: ApiRequestService, private router: Router) {}

  ngOnInit() {
    this.CreateLoginForm();
    this.animation();

    const access_token = this._cookieService.get('access_token');
    if (access_token) {
      console.log(access_token);
      console.log(this.authservice.isAuthenticated());

      if (this.authservice.isAuthenticated()) {

        console.log('redirecting');
        this.router.navigate(['/user/dashboard']);

      } else {
        console.log('logout out, redirecting to login');
        this.router.navigate(['/user/dashboard']);
        // this.authenticationService.logout();

        // this.router.navigate(['/welcome']);

      }

    }

  }

  CreateLoginForm() {
    this.loginform = this.fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.pattern(AppConfig.emailPattern)])],
      'password': ['', Validators.required]
    });
  }

  verify(email, password) {

    this.loading = true;
    this.responseStatus = {};
    console.log(email, password);

    this.authenticationService.login(email, password)
      .subscribe(
        result => {
          //console.log(result);
          if (result === true) {
            //login successful
            this.apirequest.getUserDetails().subscribe(data => {
              this.currentUser = data;
              console.log(this.currentUser);
              this.loading = false;
              if (this.currentUser.status == 1) {
                localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                HeaderComponent.updateCurrentUser.next(true);
                location.reload();
                this.router.navigate(['/user/dashboard']);

              }
              else if (this.currentUser.status == 0){
                this.authenticationService.logout();
                this.registerModalActions.emit({action: 'modal', params: ['open']});

              }

            });
          }
        }, error => {
          this.loading = false;
          this.responseStatus = error;
          console.log(this.responseStatus.error);
        });
  }

  gotoSignIn() {
    this.registerModalActions.emit({action: 'modal', params: ['close']});
    this.router.navigate(['welcome/sign/in']);
  }

  animation() {
    AOS.init({
      once: true
    });
  }
}
