import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface UserData {
  nombre: string;
  perfil: string;
  institucion: string;
  facultad: string;
  correo: string;
}
const USER_DATA: UserData[] = [
  { nombre: 'Juan Perez', perfil: 'Estudiante', institucion: 'Instituto A', facultad: 'Facultad A', correo: 'juan.perez@institutoa.com' },
  { nombre: 'Maria Lopez', perfil: 'Tutor', institucion: 'Instituto B', facultad: 'Facultad B', correo: 'maria.lopez@institutob.com' },
  { nombre: 'Carlos Gómez', perfil: 'Estudiante', institucion: 'Instituto C', facultad: 'Facultad C', correo: 'carlos.gomez@institutoc.com' },
  { nombre: 'Ana Fernández', perfil: 'Tutor', institucion: 'Instituto D', facultad: 'Facultad D', correo: 'ana.fernandez@institutod.com' },
  { nombre: 'Luis Martínez', perfil: 'Estudiante', institucion: 'Instituto E', facultad: 'Facultad E', correo: 'luis.martinez@institutoe.com' },
  { nombre: 'Sofia Sánchez', perfil: 'Tutor', institucion: 'Instituto F', facultad: 'Facultad F', correo: 'sofia.sanchez@institutof.com' },
  { nombre: 'Miguel Torres', perfil: 'Estudiante', institucion: 'Instituto G', facultad: 'Facultad G', correo: 'miguel.torres@institutog.com' },
  { nombre: 'Laura Gutiérrez', perfil: 'Tutor', institucion: 'Instituto H', facultad: 'Facultad H', correo: 'laura.gutierrez@institutoh.com' },
  { nombre: 'Daniel Ruiz', perfil: 'Estudiante', institucion: 'Instituto I', facultad: 'Facultad I', correo: 'daniel.ruiz@institutoi.com' },
  { nombre: 'Carolina Castro', perfil: 'Tutor', institucion: 'Instituto J', facultad: 'Facultad J', correo: 'carolina.castro@institutoj.com' },
  { nombre: 'Andrés Mendoza', perfil: 'Estudiante', institucion: 'Instituto K', facultad: 'Facultad K', correo: 'andres.mendoza@institutok.com' },
  { nombre: 'Verónica Herrera', perfil: 'Tutor', institucion: 'Instituto L', facultad: 'Facultad L', correo: 'veronica.herrera@institutol.com' },
];


@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html',
  styleUrls: ['./tutor-registration.component.scss']
})
export class TutorRegistrationComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'perfil', 'institucion', 'facultad', 'correo', 'acciones'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(USER_DATA);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  notificar(element: UserData) {
    // Implementar la acción de notificación
    console.log('Notificar:', element);
  }

  eliminar(element: UserData) {
    // Implementar la acción de eliminación
    console.log('Eliminar:', element);
  }

}
