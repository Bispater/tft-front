import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() userRole: any; 

  // notificaciones: number = 2; 
  showResponsiveMenu = false;
  menus: any[] = [];

  notificaciones = [
    { message: 'El estudiante Fernando Alonso no tiene un registro favorable en sus autoevaluaciones de salud mental.' },
    { message: 'El estudiante Fernando Alonso no tiene calificación de desempeño en el reporte Nº3, favor ingresar una.' }
  ];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    if (this.userRole) {
      this.menus = this.menuService.getMenuByRole(this.userRole);
    }
    // const userRole = 'Administrador'; 
    // this.menus = this.menuService.getMenuByRole(userRole);

  }
  toggleMenu() {
    this.showResponsiveMenu = !this.showResponsiveMenu;
  }

  closeMenu() {
    this.showResponsiveMenu = false;
  }

  removeNotification(notification: any) {
    this.notificaciones = this.notificaciones.filter(n => n !== notification);
  }

}
