import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ImMaterialModule} from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { DiscoverModule} from './discover/discover.module';
import { DashboardAppModule } from './dashboard-app/dashboard-app.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AuthModule,
    CoreModule,
    ImMaterialModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    DiscoverModule,
    FormsModule, ReactiveFormsModule,
    DashboardAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
