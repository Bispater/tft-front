import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResourcesComponent } from './users/resources/resources.component';
import { InscriptionComponent } from './users/student/pages/inscription/inscription.component';
import { TeacherDashboardComponent } from './users/teacher/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './users/student/student-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', data: { breadcrumb: 'Home' } },
  { path: 'login', component: LoginComponent, data: { breadcrumb: 'Login' } },
  { path: 'create-account', component: CreateAccountComponent, data: { breadcrumb: 'Create Account' } },
  { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard' } },
  { path: 'resources', component: ResourcesComponent, data: { breadcrumb: 'Resources' } },
  { path: 'inscription', component: InscriptionComponent, data: { breadcrumb: 'Inscription' } },
  { path: 'teacher', component: TeacherDashboardComponent, data: { breadcrumb: 'Teacher Dashboard' } },
  { path: 'admin', loadChildren: () => import('./users/admin/admin.module').then(m => m.AdminModule), data: { breadcrumb: 'Admin' } },
  { path: 'student', loadChildren: () => import('./users/student/student.module').then(m => m.StudentModule) },
  { path: '**', redirectTo: 'login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
