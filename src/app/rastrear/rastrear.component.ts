import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { data } from 'jquery';
import { EstadoEntrega, RegistroPago } from '../interfaces';
import { DataService } from '../servicios/data.service';
import { ObtenerEstadoEntrega } from '../servicios/obtenerEstadoEntrega';

@Component({
  selector: 'app-rastrear',
  templateUrl: './rastrear.component.html',
  styleUrls: ['./rastrear.component.scss']
})
export class RastrearComponent implements OnInit {
  firstName?: any
  usuario?: string;
  codigo_pago?: number;
  nro_venta?: number;
  respuestaEntrega?: EstadoEntrega;
  constructor(private obtenerEstadoEntrega: ObtenerEstadoEntrega, private titulo: Title, public dataService: DataService) {
    titulo.setTitle('Rastrea')
  }

  ngOnInit(): void {
    this.firstName = sessionStorage.getItem('Nombre')
    console.log("usuario: ", this.dataService.usuario)

    this.usuario = this.dataService.usuario
  }
  buscarEstadoEntrega() {
    let busquedaEstadoEntrega: RegistroPago;
    busquedaEstadoEntrega = {
      codigo_pago: this.codigo_pago,
      nro_venta: this.nro_venta,
    }

    this.obtenerEstadoEntrega.buscarEstadoEntrega(busquedaEstadoEntrega).subscribe(data => {
      console.log("Pintar: ", data);
      this.respuestaEntrega = data;
    })
  }
}
