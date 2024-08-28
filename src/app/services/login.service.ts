import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private route : Router,
    private snackBar: MatSnackBar
  ) { }

  authService(credentials : any){
    console.log("credentials  ", credentials);
    if (credentials.email == "admin@tft.cl" && credentials.password == 123 && credentials.profile == "administrador"){
      console.log("todo ok");
      this.route.navigate(['/admin']);
    } else if (credentials.email == "estudiante@tft.cl" && credentials.password == 123 && credentials.profile == "estudiante"){
      this.route.navigate(['/student']);
    } else {
      this.snackBar.open('Error al ingresar el usuario', 'Cerrar', {
        duration: 3000,
      });
    }
  }
}
