import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUpPasword: FormGroup;
  allCountries: any[] = [];

  constructor(private service: ApiService, private router: Router) {
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


  onSubmit() {
    this.service.userRegister(this.signUpPasword.value).subscribe((result: any) => {
      this.router.navigate(['/auth/login']);
    })

  }
}
