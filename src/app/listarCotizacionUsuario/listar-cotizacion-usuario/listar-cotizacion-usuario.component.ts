import { Component, OnInit } from '@angular/core';
import { CotizacionUser, Persona } from 'src/app/interfaces';
import { DataService } from 'src/app/servicios/data.service';
import { ListarCotizacionUsuarioService } from 'src/app/servicios/listarCotizacionUsuario.service';
import { ObtenerDatosPersonales } from 'src/app/servicios/obtenerDatosPersonales';

@Component({
  selector: 'app-listar-cotizacion-usuario',
  templateUrl: './listar-cotizacion-usuario.component.html',
  styleUrls: ['./listar-cotizacion-usuario.component.scss']
})
export class ListarCotizacionUsuarioComponent implements OnInit {
  usuario?: string;
  firstName?: any
  cotizacionUser: CotizacionUser[] = [];
  persona?: Persona;

  dniSession: any;
  nombreSession: any;
  apellidPaternoSession: any;
  apellidoMaternoSession: any;
  phoneSession: any;
  correoSession: any;

  constructor(private obtenerDatosPersonales: ObtenerDatosPersonales, public dataService: DataService, private listarCotizacionUsuarioService: ListarCotizacionUsuarioService) { 

    
  }

  ngOnInit(): void {
    this.firstName = sessionStorage.getItem('Nombre')
    console.log("usuario: ", this.dataService.usuario)

    this.usuario = this.dataService.usuario

    /*this.obtenerDatosPersonales.obtenerDataPersona(this.usuario).subscribe( data => {
      console.log("Data usuario: ", data)
      this.persona = data
      console.log(this.persona)

      sessionStorage.setItem('Dni', data.dni!)
      sessionStorage.setItem('Nombres', data.nombres!)
      sessionStorage.setItem('Apellido_paterno', data.apellido_paterno!)
      sessionStorage.setItem('Apellido_materno', data.apellido_materno!)
      sessionStorage.setItem('Phone', data.nro_celular!)
      sessionStorage.setItem('email', data.correo!)
      document.getElementById("DNI")?.setAttribute("value", data.dni!)
      document.getElementById("Nombres")?.setAttribute("value", data.nombres!)
      document.getElementById("Apellido_paterno")?.setAttribute("value", data.apellido_paterno!)
      document.getElementById("Apellido_materno")?.setAttribute("value", data.apellido_materno!)
      document.getElementById("Phone")?.setAttribute("value", data.nro_celular!)
      document.getElementById("email")?.setAttribute("value", data.correo!)
    });

    this.dniSession = sessionStorage.getItem('Dni')
    this.nombreSession = sessionStorage.getItem('Nombres')
    this.apellidPaternoSession = sessionStorage.getItem('Apellido_paterno')
    this.apellidoMaternoSession = sessionStorage.getItem('Apellido_materno')
    this.phoneSession = sessionStorage.getItem('Phone')
    this.correoSession = sessionStorage.getItem('email')

    document.getElementById("DNI")?.setAttribute("value", this.dniSession)
    document.getElementById("Nombres")?.setAttribute("value", this.nombreSession)
    document.getElementById("Apellido_paterno")?.setAttribute("value", this.apellidPaternoSession)
    document.getElementById("Apellido_materno")?.setAttribute("value", this.apellidoMaternoSession)
    document.getElementById("Phone")?.setAttribute("value", this.phoneSession)
    document.getElementById("email")?.setAttribute("value", this.correoSession)*/


    this.listarCotizacionUsuarioService.cotizacionesUsuario(this.usuario).subscribe( data => {
      this.cotizacionUser = data.listaCotizacionUsuario;
      console.log("Data usuario: ", data)
    });
  }

}
