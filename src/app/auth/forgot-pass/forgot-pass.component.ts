import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent {
  forgotPasword: FormGroup;

  constructor(private service: ApiService,private router: Router) {
    this.forgotPasword = new FormGroup({
      userEmail: new FormControl(null, Validators.required)
    });
  }

  get formControl() {
    return this.forgotPasword.controls;
  }


  onSubmit() {
    this.service.forgotPassword(this.forgotPasword.value).subscribe((result: any) =>{
      this.router.navigate(['/auth/login'])
    })
  }
}