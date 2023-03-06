import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signInPasword: FormGroup;
  isMailAvailable: boolean = false;
  email_available: boolean = false;

  constructor(private service: ApiService, private router: Router,private toastr: ToastrService) {
    this.signInPasword = new FormGroup({
      userPassword: new FormControl(null, Validators.required),
      userEmail: new FormControl(null, Validators.required)
    });
  }

  get formControl() {
    return this.signInPasword.controls;
  }


  checkAvailbility(type: any) {
   
    if(type === 'email' && this.signInPasword?.value?.userEmail !== '') {
      this.service.getOneUserBySearch({userEmail: this.signInPasword?.value?.userEmail}).subscribe((result: any) => {
        if(result.data) {
          this.isMailAvailable = true;
          this.email_available = false;
        }
        else {
          this.isMailAvailable = false;
          this.email_available = true;
        }
      })  
    }
  }

  onSubmit() {
    this.service.login(this.signInPasword.value).subscribe((result: any) => {
      if(result.data) {
        localStorage.setItem('userDetails',JSON.stringify(result.data));
        this.toastr.success('Login success');
        this.router.navigate(['/client-area']);
      }
    })
  }
}
