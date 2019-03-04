import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionUserComponent } from './subscription-user/subscription-user.component';
import { SubscriptionCompanyComponent } from './subscription-company/subscription-company.component';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionUserComponent,
    canActivate: []
  },
  {
    path: 'company',
    component: SubscriptionCompanyComponent,
    canActivate: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
