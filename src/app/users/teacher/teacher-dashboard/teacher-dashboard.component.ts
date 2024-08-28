import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/utils/student';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})

export class TeacherDashboardComponent implements OnInit {
  anoFiltro: string = '';
  btton_primavera: boolean = false;
  btton_otono: boolean = false;

  alumnos = [
    { nombre: 'Novak Djokovic', generacion: 1, correo: 'novakj@mail.pucv.cl', tutor: 'Goran Ivanisevic', tema: 'Plan de trabajo', inscrito: true, aceptar: false , anoingreso:'2024' , nota:'6.5' },
    { nombre: 'Jannik Sinner', generacion: 1, correo: 'janniks@mail.pucv.cl', tutor: 'Riccardo Piatti', tema: 'Plan de trabajo', inscrito: true, aceptar: false , anoingreso:'2023' , nota:'6.5' },
    { nombre: 'Carlos Alcaraz', generacion: 1, correo: 'carlosa@mail.pucv.cl', tutor: 'Juan Carlos Ferrero', tema: 'Plan de trabajo', inscrito: true, aceptar: false , anoingreso:'2024' , nota:'6.5' },
    { nombre: 'Daniil Medvedev', generacion: 2, correo: 'daniilm@mail.pucv.cl', tutor: '', tema: 'Plan de trabajo', inscrito: true, aceptar: false , anoingreso:'2024' , nota:"6.5"},
    { nombre: 'Alexander Zverev', generacion: 2, correo: 'alexander@mail.pucv.cl', tutor: 'Sergi Bruguera', tema: 'Plan de trabajo', inscrito: true, aceptar: false , anoingreso:'2024' , nota:'6.5'},
    { nombre: 'Andrey Rublev', generacion: 2, correo: 'andrey@mail.pucv.cl', tutor: 'Fernando Vicente', tema: 'Plan de trabajo', inscrito: true, aceptar: false , anoingreso:'2023' , nota:'6.5' },
  ];

  years = [2023, 2024];
  selectedYear: number = 2024; 
  filteredAlumnos: any[] = [];
  primaveraAlumnos: any[] = [];
  otonoAlumnos: any[] = [];
  displayedColumns: string[] = ['nombre', 'nota', 'tema', 'correo', 'tutor', 'perfil']; 

  constructor(private router: Router) {}

  ngOnInit() {
    this.filterByYear();

  }

  filterByYear() {
    if (this.selectedYear) { 
      this.filteredAlumnos = this.alumnos.filter(alumno => alumno.anoingreso === this.selectedYear.toString());
      this.primaveraAlumnos = this.filteredAlumnos.filter(alumno => alumno.generacion === 1);
      this.otonoAlumnos = this.filteredAlumnos.filter(alumno => alumno.generacion === 2);
    } else {
      this.filteredAlumnos = [];
      this.primaveraAlumnos = [];
      this.otonoAlumnos = [];
    }
  }

  viewProfile(alumno: any) {
    this.router.navigate(['/perfil', alumno.correo]);
  }

  verMas(alumno: Student) {
    console.log('Ver más información sobre el tema de', alumno.nombre);
  }

}
