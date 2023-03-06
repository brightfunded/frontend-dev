import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-newsleter',
  templateUrl: './newsleter.component.html',
  styleUrls: ['./newsleter.component.scss']
})
export class NewsleterComponent implements OnInit {
  userDetails: any = {};
  profileForm: FormGroup;

  constructor(private service: ApiService,private toastr: ToastrService) {
    this.profileForm = new FormGroup({
      newsRecap: new FormControl(null, Validators.required)
    });
  }

  get formControl() {
    return this.profileForm.controls;
  }

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}')
    if(this.userDetails) {
      this.formControl['newsRecap'].setValue(this.userDetails.newsRecap);
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
