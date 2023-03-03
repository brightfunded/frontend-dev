import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.scss']
})
export class AccountInformationComponent implements OnInit {
  userDetails: any = {};
  profileForm: FormGroup;

  constructor(private service: ApiService) {
    this.profileForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      languageCode: new FormControl(null, Validators.required),
      timeZoneCode: new FormControl(null, Validators.required)
    });
  }

  get formControl() {
    return this.profileForm.controls;
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
      }
    })
  }
}
