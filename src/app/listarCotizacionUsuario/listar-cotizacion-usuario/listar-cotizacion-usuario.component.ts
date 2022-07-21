import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
  cotizacionUser2: CotizacionUser[] = [];
  persona?: Persona;

  dniSession: any;
  nombreSession: any;
  apellidPaternoSession: any;
  apellidoMaternoSession: any;
  phoneSession: any;
  correoSession: any;
  lista:number [] = [];

  constructor(private titulo: Title, private obtenerDatosPersonales: ObtenerDatosPersonales, public dataService: DataService, private listarCotizacionUsuarioService: ListarCotizacionUsuarioService) { 
    titulo.setTitle('Ver cotización')
    
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
      /*document.getElementById("DNI")?.setAttribute("value", data.dni!)
      document.getElementById("Nombres")?.setAttribute("value", data.nombres!)
      document.getElementById("Apellido_paterno")?.setAttribute("value", data.apellido_paterno!)
      document.getElementById("Apellido_materno")?.setAttribute("value", data.apellido_materno!)
      document.getElementById("Phone")?.setAttribute("value", data.nro_celular!)
      document.getElementById("email")?.setAttribute("value", data.correo!)*/
    //}
    //);

   
    /*this.correoSession = sessionStorage.getItem('email')

    console.log("Correo sesion: ",  this.correoSession)

    document.getElementById("DNI")?.setAttribute("value", this.dniSession)
    document.getElementById("Nombres")?.setAttribute("value", this.nombreSession)
    document.getElementById("Apellido_paterno")?.setAttribute("value", this.apellidPaternoSession)
    document.getElementById("Apellido_materno")?.setAttribute("value", this.apellidoMaternoSession)
    document.getElementById("Phone")?.setAttribute("value", this.phoneSession)
    document.getElementById("email")?.setAttribute("value", this.correoSession)

    let correoFinal;
    if(this.usuario?.length != 0){
      console.log("Paso 1: ",this.usuario)
      correoFinal = this.usuario
    }else if(this.correoSession.length != null){
      console.log("Paso 2: ",this.correoSession)
      correoFinal = this.correoSession
    }

    console.log("Final: ", correoFinal)*/

    this.listarCotizacionUsuarioService.cotizacionesUsuario(this.usuario).subscribe( data => {
      this.cotizacionUser = data.listaCotizacionUsuario;
      let length0fObject = 0;
      
      
      let indice = 0
      this.cotizacionUser.forEach(cotizacion => {
        //indice++
        indice += 1
        cotizacion.id = indice
        this.cotizacionUser2.push(cotizacion)
      })
      console.log("dddddd: ", this.cotizacionUser2)
  
      /*for(let key in data.listaCotizacionUsuario){
        console.log("key: ", key)
        length0fObject++;
        this.lista.push(length0fObject);
      }
      console.log("Longitud: ", length0fObject)
      this.cotizacionUser.push(this.lista)
      console.log("Lista: ", lista)
      console.log("Valor: ", this.cotizacionUser.length)
      console.log("Data usuario: ", data)*/
    });
  }

}
