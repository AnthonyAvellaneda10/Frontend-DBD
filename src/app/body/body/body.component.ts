import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(private _CargaScripts: CargarScriptsService) { 
    _CargaScripts.Carga(["darkmode/dark"]);
  }

  ngOnInit(): void {
  }

}
