import { MaterialModule } from './../../material/material.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {path:"" , redirectTo:"login" , pathMatch:"full"},
    {path:"login" , component: LoginComponent},
];

@NgModule({
  declarations: [
    AuthComponent,
     LoginComponent
    ],
  imports: [
    CommonModule , RouterModule.forChild(routes) , MaterialModule
  ]
})

export class AuthRoutingModule { }



