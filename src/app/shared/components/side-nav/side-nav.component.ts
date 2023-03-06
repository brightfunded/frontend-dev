import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  @ViewChild(NgScrollbar, { static: true })  scrollbarRef!: NgScrollbar;

  constructor(private router: Router) {}
  logout(){
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

}
