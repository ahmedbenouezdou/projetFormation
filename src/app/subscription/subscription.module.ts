import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImMaterialModule} from '../material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionUserComponent } from './subscription-user/subscription-user.component';
import { SubscriptionCompanyComponent } from './subscription-company/subscription-company.component';

import { SubscriptionUserService } from './subscription-user/subscription-user.service';


@NgModule({
  declarations: [SubscriptionUserComponent, SubscriptionCompanyComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    SubscriptionRoutingModule,
    MatNativeDateModule,
    ImMaterialModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [SubscriptionUserService]
})
export class SubscriptionModule { }
