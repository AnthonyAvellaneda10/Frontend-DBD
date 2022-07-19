import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-rastrear',
  templateUrl: './rastrear.component.html',
  styleUrls: ['./rastrear.component.scss']
})
export class RastrearComponent implements OnInit {
  firstName?: any
  usuario?: string;

  constructor(private titulo: Title, public dataService: DataService) { 
    titulo.setTitle('Rastrea')
  }

  ngOnInit(): void {
    this.firstName = sessionStorage.getItem('Nombre')
    console.log("usuario: ", this.dataService.usuario)

    this.usuario = this.dataService.usuario
  }

}
