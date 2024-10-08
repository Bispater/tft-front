import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatCardModule
  ]
})
export class StudentModule { }
