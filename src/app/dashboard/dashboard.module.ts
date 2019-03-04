import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAppRoutingModule } from './dashboard-routing.module';
import { DashboardAppComponent } from './dashboard.component';
import { ForumComponent } from './forum/forum.component';
import { ProfilComponent } from './profil/profil.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';
import { BodypageComponent } from './template/bodypage/bodypage.component';
import { MyStatisticsComponent } from './my-statistics/my-statistics.component';

@NgModule({
  declarations: [
    DashboardAppComponent,
    ForumComponent, 
    ProfilComponent, 
    NavbarComponent, 
    FooterComponent, 
    BodypageComponent, MyStatisticsComponent],
  imports: [
    CommonModule,
    DashboardAppRoutingModule
  ]
})
export class DashboardAppModule { }
