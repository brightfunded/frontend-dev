import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userDetails: any = {};
  profileForm: FormGroup;
  allCountries: any[] = [];

  constructor(private service: ApiService,private toastr: ToastrService) {
    this.getCountryOptions();
    this.profileForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      userEmail: new FormControl(null, Validators.required),
      countryCode: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      street: new FormControl(null, Validators.required),
      postalCode: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required)
    });
  }

  get formControl() {
    return this.profileForm.controls;
  }

  getCountryOptions() {
    this.service.listCountry().subscribe((countries: any) => {
      this.allCountries = countries.data;
    })
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
        this.userDetails = {
          ...this.userDetails,
          ...this.profileForm.value
        };
        localStorage.setItem('userDetails',JSON.stringify(this.userDetails));
        this.toastr.success('your profile updated successfully');
      }
    })
  }
}
