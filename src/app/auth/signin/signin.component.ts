import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signInPasword: FormGroup;

  constructor(private service: ApiService, private router: Router) {
    this.signInPasword = new FormGroup({
      userPassword: new FormControl(null, Validators.required),
      userEmail: new FormControl(null, Validators.required)
    });
  }

  get formControl() {
    return this.signInPasword.controls;
  }


  onSubmit() {
    this.service.login(this.signInPasword.value).subscribe((result: any) => {
      if(result.data) {
        localStorage.setItem('userDetails',JSON.stringify(result.data));
        this.router.navigate(['/']);
      }
    })
  }
}
