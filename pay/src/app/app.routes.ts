import { RouterLink, RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { NgModule } from '@angular/core';
import { AddMoney } from './addmoney/addmoney';
import { PayMoney } from './paymoney/paymoney';

import { Sth } from './sth/sth';
import { Dth } from './dth/dth';
import { Profile } from './profile/profile';
import { Checkb } from './checkb/checkb';
import {  Signup } from './signup/signup';
import { Dashboard } from './dashboard/dashboard';
import { Otp } from './otp/otp';


export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path:'dashboard', component:Dashboard},
    {path:'Login', component:Login},
    {path:'otp', component:Otp},
    
    {path:'addmoney', component:AddMoney},
    {path:'paymoney', component:PayMoney},
    {path:'sth', component:Sth},
    {path:'dth', component:Dth},
    {path:'profile', component:Profile},
    {path:'checkb', component:Checkb},
    {path:'signup', component: Signup},
];
