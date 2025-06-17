import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { PayMoney } from '../pay-money/pay-money';
import { PageNotFoundComponent } from '../page-not-found-component/page-not-found-component';
import { SignUp } from '../sign-up/sign-up';
import { AddMoney } from '../add-money/add-money';

const routes: Routes = [
  
  {path:'Sign-Up',component:SignUp},
      {path:'Add-Money',component:AddMoney},
      {path:'Pay-Money',component:PayMoney},
      {path: '**',component:PageNotFoundComponent}
  // Add other routes here
   // wildcard for 404
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule,RouterLink],
  exports: [RouterModule]
})
export class AppRoutingModule { }
