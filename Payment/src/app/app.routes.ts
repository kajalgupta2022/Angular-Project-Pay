import { Routes } from '@angular/router';
import { Component, SimpleChange } from '@angular/core';
import { Login } from './login/login';
import { AddMoney } from './add-money/add-money';
import { SignUp } from './sign-up/sign-up';
import { PayMoney } from './pay-money/pay-money';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component';

export const routes: Routes = [
    {path:'Login',component:Login},
    {path:'Sign-Up',component:SignUp},
    {path:'Add-Money',component:AddMoney},
    {path:'Pay-Money',component:PayMoney},
    {path: '**',component:PageNotFoundComponent}
];
