import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAppRoutingModule } from './dashboard-app-routing.module';
import { DashboardAppComponent } from './dashboard-app.component';

@NgModule({
  declarations: [DashboardAppComponent],
  imports: [
    CommonModule,
    DashboardAppRoutingModule
  ]
})
export class DashboardAppModule { }
