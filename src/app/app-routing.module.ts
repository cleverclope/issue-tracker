
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

  const routes: Routes = [

    {path:"" , redirectTo:"auth" , pathMatch:"full"},
    {path:"auth" ,  loadChildren: () => import("./auth/auth-routing.module").then(m=> m.AuthRoutingModule)},

    {path:"home" , loadChildren: () => import("./home/home-routing.module").then(m=> m.HomeRoutingModule)},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

