import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { InscriptionsComponent } from './pages/inscriptions/inscriptions.component';
import { ResourcesComponent } from '../resources/resources.component';
import { TutorRegistrationComponent } from './pages/tutor-registration/tutor-registration.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: '', redirectTo: 'inscriptions', pathMatch: 'full' },
      { path: 'inscriptions', component: InscriptionsComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'tutor-registration', component: TutorRegistrationComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
