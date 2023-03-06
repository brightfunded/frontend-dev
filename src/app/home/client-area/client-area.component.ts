import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-area',
  templateUrl: './client-area.component.html',
  styleUrls: ['./client-area.component.scss']
})
export class ClientAreaComponent {
  constructor(private router: Router){}

  redirectFreeTrial(){
    this.router.navigate(['/free-trial']);
  }
}
