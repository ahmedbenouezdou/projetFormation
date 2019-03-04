import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAppComponent } from './dashboard.component';
import { ForumComponent } from './forum/forum.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthGuard } from '../core';

const routes: Routes = [
  {
    path: '',
    component: DashboardAppComponent,
    canActivate: [],
    children: [
      { path: 'profil', component: ProfilComponent },
      { path: 'forum', component: ForumComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAppRoutingModule { }
