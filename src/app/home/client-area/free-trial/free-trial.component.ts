import { Component } from '@angular/core';

@Component({
  selector: 'app-free-trial',
  templateUrl: './free-trial.component.html',
  styleUrls: ['./free-trial.component.scss']
})
export class FreeTrialComponent {
  loginCredforFreeTrial: boolean = false

  freeTrial(){
    window.scrollTo(0, 0)
    this.loginCredforFreeTrial = true
  }

}
