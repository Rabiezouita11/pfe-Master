import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import {ProfileComponent} from "./profile/profile.component";

import { EtatDeSerreComponent } from './etat-de-serre/etat-de-serre.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' , data: {title: 'Administrateur'}},
  { path: 'dashboard', component: DashboardComponent , data: {title: 'Administrateur'}},
  { path: 'etat_de_serreIntellegent', component: EtatDeSerreComponent , data: {title: 'Administrateur'}},

  { path: 'profile', component: ProfileComponent , data: {title: 'Product'} },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
