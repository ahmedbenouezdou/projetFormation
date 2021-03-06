import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImMaterialModule} from '../material-module';

import { HomeComponent } from './home.component';
import { HomeRoutingModule} from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ImMaterialModule
    ]
})
export class HomeModule { }
