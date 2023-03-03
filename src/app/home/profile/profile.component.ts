import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userDetails: any = {};
  profileForm: FormGroup;

  constructor(private service: ApiService) {
    this.profileForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      userEmail: new FormControl(null, Validators.required),
      countryCode: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      postalCode: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required)
    });
  }

  get formControl() {
    return this.profileForm.controls;
  }

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
    if(this.userDetails) {
      this.formControl['firstName'].setValue(this.userDetails.firstName);
      this.formControl['lastName'].setValue(this.userDetails.lastName);
      this.formControl['title'].setValue(this.userDetails.title);
      this.formControl['phoneNumber'].setValue(this.userDetails.phoneNumber);
      this.formControl['userEmail'].setValue(this.userDetails.userEmail);
      this.formControl['countryCode'].setValue(this.userDetails.countryCode);
      this.formControl['street'].setValue(this.userDetails.street);
      this.formControl['postalCode'].setValue(this.userDetails.postalCode);
      this.formControl['city'].setValue(this.userDetails.city);
    }
  }

  onSubmit() {
    this.service.updateUser(this.userDetails.id,this.profileForm.value).subscribe((result: any) => {
      if(result.data) {
      }
    })
  }
}
