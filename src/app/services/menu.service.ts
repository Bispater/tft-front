import { Injectable } from '@angular/core';
import { MenuItem, Menus } from './../interfaces/menu-interface'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menus: Menus = {
    'Administrador': [
      { name: 'Inscripciones', redirect: 'inscriptions' },
      { name: 'Recursos', redirect: 'resources' },
      { name: 'Tutores/Cotutores', redirect: 'tutor-registration' }
    ],
    'Tutor': [
      { name: 'Alumnos Inscritos', redirect: 'student-inscriptions' },
      { name: 'Recursos', redirect: 'resources' }
    ],
    'Estudiante': [
      { name: 'Dashboard', redirect: 'dashboard' },
      { name: 'Recursos', redirect: 'resources' },
      { name: 'Inscripción', redirect: 'inscription' }
    ]
  };

  constructor() { }

  getMenuByRole(role: keyof Menus): MenuItem[] {
    return this.menus[role] || [];
  }
}
