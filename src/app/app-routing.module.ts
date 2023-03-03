import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from "./shared/app-layout/main-layout/main-layout.component";
import { AuthLayoutComponent } from "./shared/app-layout/auth-layout/auth-layout.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      { 
        path: 'auth', 
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
