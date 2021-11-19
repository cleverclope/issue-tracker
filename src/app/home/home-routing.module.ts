
import { HighchartsChartModule } from 'highcharts-angular';
import { TaskManagementComponent } from './task-management/task-management.component';
import { MaterialModule } from './../../material/material.module';
import { HomeComponent } from './home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  {path:"" , component:HomeComponent , children:[
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "task-management", component: TaskManagementComponent }
]
},

];


@NgModule({
  declarations: [
    SidebarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    TaskManagementComponent
  ],

  imports: [
    CommonModule ,
    RouterModule.forChild(routes),
    MaterialModule,
HighchartsChartModule  ]
})
export class HomeRoutingModule { }
