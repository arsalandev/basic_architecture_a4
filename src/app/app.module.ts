import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient , HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


/* Components */
import { HomeComponent } from './_components/components_welcome/home/home.component';
import { FooterComponent } from './_components/components_includes/footer/footer.component';
import { HeaderComponent } from './_components/components_includes/header/header.component';
import { SpinnerComponent } from './_components/components_includes/spinner/spinner.component';
import { UserVerificationComponent } from './_components/user-verification/user-verification.component';
import { SendemailComponent } from './_components/forgetPassword/sendemail/sendemail.component';
import { ResetpasswordComponent } from './_components/forgetPassword/resetpassword/resetpassword.component';
import { UserComponent } from './_components/user/user.component';
import { LoginComponent } from './_components/login/login.component';
import { SignupComponent } from './_components/signup/signup.component';
import { DashoardComponent } from './_components/components_user/dashoard/dashoard.component';

/* Services */
import { ApiRequestService } from './_services/api-request.service';
import { AuthenticationService } from './_services/authentication.service';
import { CookieService, CookieOptions } from 'angular2-cookie/core';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_guards/auth.guard';
import { VerificationGuard } from './_guards/verification.guard';
import { TokenInterceptorService } from './_services/token-interceptor.service';
import { AboutComponent } from './_components/components_welcome/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    DashoardComponent,
    UserVerificationComponent,
    SendemailComponent,
    ResetpasswordComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    CookieService,
    AuthService,
    AuthGuard,
    VerificationGuard,
    ApiRequestService,
    { provide: CookieOptions, useValue: {} },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
