import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reclamo',
  templateUrl: './reclamo.component.html',
  styleUrls: ['./reclamo.component.scss']
})
export class ReclamoComponent implements OnInit {
  dni: string = '';
  nombres : string = '';
  apellidoPaterno : string = '';
  apellidoMaterno : string = '';
  tipoReclamo : string = '';
  descripcion : string = '';
  constructor(private titulo: Title) {
    titulo.setTitle('Reclamo')
   }

  ngOnInit(): void {
  }

}
