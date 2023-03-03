import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesModule } from './modules/modules.module';
import { RouterModule } from '@angular/router';

import { MainLayoutComponent } from './app-layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './app-layout/auth-layout/auth-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FooterComponent } from './components/footer/footer.component'


@NgModule({
  declarations: [
    MainLayoutComponent,
    AuthLayoutComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ModulesModule,
    RouterModule
  ],
  exports: [
    ModulesModule,
    HeaderComponent,
    SideNavComponent,
    FooterComponent
  ]
})
export class SharedModule { }
