import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ComponentComponent } from './component/component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgChartsModule } from 'ng2-charts';

import { DiffusiondirectComponent } from './diffusiondirect/diffusiondirect.component';
@NgModule({
  declarations: [

    ComponentComponent,
    HeaderComponent,
    FooterComponent,
    SidbarComponent,
    DashboardComponent,
    DiffusiondirectComponent
  ],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, FormsModule, NgChartsModule],
})




export class AdminModule { }
