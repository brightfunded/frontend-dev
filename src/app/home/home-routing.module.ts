import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecurityComponent } from './security/security.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsleterComponent } from './newsleter/newsleter.component';
import { EconomicCalendarComponent } from './economic-calendar/economic-calendar.component';
import { ClientAreaComponent } from './client-area/client-area.component';
import { AccountInformationComponent } from './account-information/account-information.component'

const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "security",
    component: SecurityComponent
  },
  {
    path: "newsletter",
    component: NewsleterComponent
  },
  {
    path: "economic-calendar",
    component: EconomicCalendarComponent
  },
  {
    path: "client-area",
    component: ClientAreaComponent
  },
  {
    path: "account-information",
    component: AccountInformationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
