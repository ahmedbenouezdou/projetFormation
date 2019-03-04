import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAppComponent } from './dashboard-app.component';
import { AuthGuard } from '../core';

const routes: Routes = [
  {
    path: '',
    component: DashboardAppComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAppRoutingModule { }
