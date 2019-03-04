import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImMaterialModule} from '../material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionUserComponent } from './subscription-user/subscription-user.component';
import { SubscriptionCompanyComponent } from './subscription-company/subscription-company.component';

@NgModule({
  declarations: [SubscriptionUserComponent, SubscriptionCompanyComponent],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    MatNativeDateModule,
    ImMaterialModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class SubscriptionModule { }
