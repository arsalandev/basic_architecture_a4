import { Component, OnInit } from '@angular/core';
import {ApiRequestService} from "../../_services/api-request.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-verification',
  templateUrl: './user-verification.component.html',
  styleUrls: ['./user-verification.component.css']
})
export class UserVerificationComponent implements OnInit {

  currentUser : any = {};
  email : string = '';
  afterResponse : any = {};
  loading = false;

  constructor(private apirequest : ApiRequestService, private route:ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.email = this.route.snapshot.params['emailId'];
  }
  verifyEmail() {
    this.loading = true;
      console.log(this.email);
      let data = {
        email: this.email,
        action: 'verify'
      };
      this.apirequest.userApiFunction(data).subscribe((res) => {
        console.log(res);
        if(res.status == "True"){
          this.afterResponse.status = true;
          console.log("verfied");
          this.afterResponse.status = false;
          this.afterResponse.msg = "Verified Successfully";
          this.router.navigate(['/login']);


        }
        else{

          this.afterResponse.status = true;
          this.afterResponse.msg = "Sorry! Email not found";

        }
      });
  }
}
