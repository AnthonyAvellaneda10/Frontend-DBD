import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../servicios/data.service';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-pagalo',
  templateUrl: './pagalo.component.html',
  styleUrls: ['./pagalo.component.scss']
})
export class PagaloComponent implements OnInit {
  firstName?: any
  usuario?: string;
  
  constructor(private titulo: Title, public dataService: DataService, private _CargaScripts: CargarScriptsService) { 
    titulo.setTitle('Págalo'),
    _CargaScripts.Carga(["tarjeta/tarjeta"]);
  }

  ngOnInit(): void {
    this.firstName = sessionStorage.getItem('Nombre')
    console.log("usuario: ", this.dataService.usuario)

    this.usuario = this.dataService.usuario
  }

}
