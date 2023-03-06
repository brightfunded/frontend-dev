import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUpPasword: FormGroup;
  allCountries: any[] = [];
  isMailAvailable: boolean = false;
  isUserNameAvailable: boolean = false;
  available: boolean = false;
  email_available: boolean = false;

  constructor(private service: ApiService, private router: Router,private toastr: ToastrService) {
    this.signUpPasword = new FormGroup({
      userName: new FormControl(null, Validators.required),
      userPassword: new FormControl(null, Validators.required),
      userEmail: new FormControl(null, Validators.required),
      countryCode: new FormControl(null, Validators.required)
    });
    service.listCountry().subscribe((countries: any) => {
      this.allCountries = countries.data;
    })
  }

  get formControl() {
    return this.signUpPasword.controls;
  }


  checkAvailbility(type: any) {
   
    if(type === 'email' && this.signUpPasword?.value?.userEmail !== '') {
      this.service.getOneUserBySearch({userEmail: this.signUpPasword?.value?.userEmail}).subscribe((result: any) => {
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
    if(type === 'username' && this.signUpPasword?.value?.userName !== '') {
      this.service.getOneUserBySearch({userName: this.signUpPasword?.value?.userName}).subscribe((result: any) => {
        if(result.data) {
          this.isUserNameAvailable = true;
          this.available = false;
        }
        else {
          this.isUserNameAvailable = false;
          this.available = true;
        }
      })  
    }
    
  }


  onSubmit() {
    this.service.userRegister(this.signUpPasword.value).subscribe((result: any) => {
      this.toastr.success('Your profile is created successfully');
      this.router.navigate(['/auth/login']);
    })

  }
}
