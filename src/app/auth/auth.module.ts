import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImMaterialModule} from '../material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';

import { AuthComponent } from './auth.component';
import {AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatNativeDateModule,
    ImMaterialModule,
    FormsModule, ReactiveFormsModule
  ],
  
})
export class AuthModule { }
