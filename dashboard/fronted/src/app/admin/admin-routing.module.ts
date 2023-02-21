import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiffusiondirectComponent } from './diffusiondirect/diffusiondirect.component';
import { StatistiqueComponent } from './statistique/statistique.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' , data: {title: 'Administrateur'}},
  { path: 'dashboard', component: DashboardComponent , data: {title: 'Administrateur'}},
  { path: 'statistique', component: StatistiqueComponent , data: {title: 'Administrateur'}},
  { path: 'Diffusiondirect', component: DiffusiondirectComponent , data: {title: 'Administrateur'}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
