import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImMaterialModule} from '../material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';

import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverComponent } from './discover.component';

@NgModule({
  declarations: [DiscoverComponent],
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    MatNativeDateModule,
    ImMaterialModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class DiscoverModule { }
