import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-politica-privacidad',
  templateUrl: './politica-privacidad.component.html',
  styleUrls: ['./politica-privacidad.component.css'],
  standalone:false
})
export class PoliticaPrivacidadComponent {

  constructor(private router: Router) {}

  volverAContacto() {
    this.router.navigate(['/contacto']);
  }

}
