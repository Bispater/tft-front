import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard.component';
import { ResourcesComponent } from '../resources/resources.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: StudentDashboardComponent, children: [
      { path: '', redirectTo: 'inscription', pathMatch: 'full' },
      { path: 'inscription', component: InscriptionComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
