import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

/* Components */
import { UserComponent } from './_components/user/user.component';
import { HomeComponent } from './_components/components_welcome/home/home.component';
import { AboutComponent } from './_components/components_welcome/about/about.component';
import { LoginComponent } from './_components/login/login.component';
import { SignupComponent } from './_components/signup/signup.component';
import { DashoardComponent } from './_components/components_user/dashoard/dashoard.component';
import { UserVerificationComponent } from './_components/user-verification/user-verification.component';
import { SendemailComponent } from './_components/forgetPassword/sendemail/sendemail.component';
import { ResetpasswordComponent } from './_components/forgetPassword/resetpassword/resetpassword.component';

const routes: Routes = [

    {
        path: 'welcome', children: [
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'verify/email/:emailId', component: UserVerificationComponent},
    { path: 'forgetpassword/sendemail', component: SendemailComponent},
    { path: 'forgetpassword/resetpassword/:emailId', component: ResetpasswordComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard], children: [
        { path: 'dashboard', component: DashoardComponent }

    ] },
    /* Redirect Routes */
    { path: '', redirectTo: '/user/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/welcome/about' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
