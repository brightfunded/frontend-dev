import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  userDetails: any = {};
  profileForm: FormGroup;

  constructor(private service: ApiService,private router: Router,private toastr: ToastrService) {
    this.profileForm = new FormGroup({
      userPassword: new FormControl(null, Validators.required),
      cPassword: new FormControl(null, Validators.required),
      vPassword: new FormControl(null, Validators.required)
    });
  }

  get formControl() {
    return this.profileForm.controls;
  }

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}')
  }

  onSubmit() {
    let payload = this.profileForm.value;
    if(payload.cPassword === payload.vPassword) {
      this.service.updateUser(this.userDetails.id,this.profileForm.value).subscribe((result: any) => {
        if(result.data) {
          this.userDetails = {
            ...this.userDetails,
            ...this.profileForm.value
          };
          localStorage.setItem('userDetails',JSON.stringify(this.userDetails));
          this.toastr.success('your profile updated successfully');
          this.router.navigate(['/auth/login']);
        }
      })
    }
    else {
      alert("Password and Confirm Password are not matching");
    }
  }
}