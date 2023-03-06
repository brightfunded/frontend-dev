import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.scss']
})
export class AccountInformationComponent implements OnInit {
  userDetails: any = {};
  profileForm: FormGroup;
  allLanguages: any[] = [];
  allTimeZones: any[] = [];

  constructor(private service: ApiService,private toastr: ToastrService) {
    this.getLanguageOptions();
    this.getTimeZoneOptions();
    this.profileForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      languageCode: new FormControl(null, Validators.required),
      timeZoneCode: new FormControl(null, Validators.required)
    });
  }

  get formControl() {
    return this.profileForm.controls;
  }

  getLanguageOptions() {
    this.service.listLanguage().subscribe((countries: any) => {
      this.allLanguages = countries.data;
    })
  }


  getTimeZoneOptions() {
    this.service.listTimeZone().subscribe((countries: any) => {
      this.allTimeZones = countries.data;
    })
  }

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
    if(this.userDetails) {
      this.formControl['userName'].setValue(this.userDetails.userName);
      this.formControl['languageCode'].setValue(this.userDetails.languageCode);
      this.formControl['timeZoneCode'].setValue(this.userDetails.timeZoneCode);
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
