import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PasswordValidation} from '../../../_utilities/PasswordValidation';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiRequestService} from '../../../_services/api-request.service';

@Component({
  selector: 'app-resetpassword',
  providers: [ApiRequestService],
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {


  afterResponse: any = {};
  loading = false;
  email = '';
  resetPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private userservice: ApiRequestService, private router: Router) {

    this.resetPasswordForm = fb.group({
        'password': ['', Validators.required],
        'confirmPassword': ['', Validators.required]

      },
      {
        validator: PasswordValidation.MatchPassword // your validation method
      });

  }

  ngOnInit() {
    this.email = this.route.snapshot.params['emailId'];
  }

  resetPassword(value: any) {
    this.loading = true;
    // tslint:disable-next-line: prefer-const
    let data = {
      email : this.email,
      action: 'forgetpassword',
      newpassword : value.password };
    console.log(data);
    this.userservice.userApiFunction(data).subscribe(res => {

        console.log(res);
        this.loading = false;
        if (res.status === 'True') {
          this.afterResponse.status = true;
          this.afterResponse.msg = 'Password Changed Successfully';
          setTimeout(() => {
            this.router.navigate(['/welcome']);
          }, 50);
        } else {
          this.afterResponse.status = true;
          this.afterResponse.msg = 'Sorry! Email not found';
        }
    });
  }

}
