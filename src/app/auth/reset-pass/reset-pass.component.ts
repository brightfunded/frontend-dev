import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent {
  resetPasword: FormGroup;
  email: string = '';
  token: string = '';

  constructor(private service: ApiService,private router: Router,private route: ActivatedRoute,private toastr: ToastrService) {
    this.resetPasword = new FormGroup({
      userPassword: new FormControl(null, Validators.required),
      usercPassword: new FormControl(null, Validators.required)
    });
    this.route.queryParams.subscribe((queryParams: any) =>{
      this.email=atob(queryParams.email);
      this.token=atob(queryParams.token);
    })
  }

  get formControl() {
    return this.resetPasword.controls;
  }


  onSubmit() {
    let payload = this.resetPasword.value;
    if(payload.userPassword === payload.usercPassword) {
      this.service.resetPassword(this.resetPasword.value).subscribe((result: any) =>{
        this.toastr.success('Your password changed successfully');
        this.router.navigate(['/auth/login']);
      })
    }
    else {
      alert("Password and Confirm Password are not matching");
    }
  }
}
