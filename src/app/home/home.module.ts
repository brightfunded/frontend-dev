import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ClientAreaComponent } from './client-area/client-area.component';
import { AccountInformationComponent } from './account-information/account-information.component';
import { SecurityComponent } from './security/security.component';
import { NewsleterComponent } from './newsleter/newsleter.component';
import { EconomicCalendarComponent } from './economic-calendar/economic-calendar.component';

import { SharedModule } from '../shared/shared.module'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    ClientAreaComponent,
    AccountInformationComponent,
    SecurityComponent,
    NewsleterComponent,
    EconomicCalendarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HomeModule { }
