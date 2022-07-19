import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.scss']
})
export class PreguntasFrecuentesComponent implements OnInit {

  constructor(private _CargaScripts: CargarScriptsService, private titulo: Title) { 
    _CargaScripts.Carga(["darkmode/preguntas/preguntas"]);
    titulo.setTitle('Preguntas frecuentes')
  }

  ngOnInit(): void {
  }

}
