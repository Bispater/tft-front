import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatRut, validateRut } from '../../../../utils/utils'; // Asegúrate de que la ruta sea correcta
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  inscripcionForm: FormGroup;
  rut: string = '';
  showModal: boolean = false;
  isProyect: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) {
    this.inscripcionForm = this.fb.group({
      rut: ['', [Validators.required, this.rutValidator()]],
      correo_inst: ['', [Validators.required, Validators.email]],
      tutor: ['', Validators.required],
      cotutor: ['', Validators.required],
      semestres: ['', Validators.required],
      habitos: ['', Validators.required],
      plataformas_dig: ['', Validators.required],
      tema: ['', Validators.required],
      areadesallorro: ['', Validators.required],
      expl_tema: ['', Validators.required],
      chkb: [false]
    });
  }


  submitForm() {
    if (this.inscripcionForm.valid) {
      console.log('Formulario válido', this.inscripcionForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }

  formatRut() {
    const rutControl = this.inscripcionForm.get('rut');
    if (rutControl) {
      const formattedRut = formatRut(rutControl.value);
      rutControl.setValue(formattedRut, { emitEvent: false });
    }
  }

  rutValidator() {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const valid = validateRut(value);
      return valid ? null : { rutInvalid: true };
    };
  }

}
