import { Routes } from '@angular/router';
import { WefedexComponent } from './wefedex/wefedex.component';
import { BusinessfedexComponent } from './businessfedex/businessfedex.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home', loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent)},
    {path:'wefedex', loadComponent:()=>import('./wefedex/wefedex.component').then(m=>m.WefedexComponent)},
    {path:'businessfedex', loadComponent:()=>import('./businessfedex/businessfedex.component').then(m=>m.BusinessfedexComponent)},
    {path:'peoplededex', loadComponent:()=>import('./peoplefedex/peoplefedex.component').then(m=>m.PeoplefedexComponent)},
];

