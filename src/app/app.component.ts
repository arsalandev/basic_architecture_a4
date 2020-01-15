import { Component } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authenticationservice: AuthenticationService, private router: Router) { }

  public callback() {
    console.log('Time out');
    this.authenticationservice.logout();
    location.reload();
    this.router.navigate(['/welcome/home']);
  }
}
