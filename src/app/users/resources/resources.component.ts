import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {
  resources = [
    { title: 'PROPUESTA\nPROYECTO DE TÍTULO', file: 'propuesta.pdf', img: '../../../assets/resource_1.svg' },
    { title: 'FORMATO ARTÍCULO\nPROYECTO DE TÍTULO', file: 'formato_articulo.pdf', img: '../../../assets/resource_2.svg' },
    { title: 'FORMATO INFORME\nPROYECTO DE TÍTULO', file: 'formato_informe.pdf', img: '../../../assets/resource_3.svg' },
    { title: 'LOGOS INSTITUCIONALES', file: 'logos_institucionales.pdf', img: '../../../assets/resource_4.svg' },
    { title: 'REGLAMENTO TFT', file: 'reglamento_tft.pdf', img: '../../../assets/resource_5.svg' },
    { title: 'EXPLORA MÁS\nRECURSOS', file: 'explora_mas.pdf', img: '../../../assets/resource_5.svg' }
  ];

  downloadPDF(file: string) {
    const link = document.createElement('a');
    link.href = '../../../assets/Gestor de TFT.pdf';
    link.download = 'Pruebapdf.pdf'; 
    link.click();
  }
}




