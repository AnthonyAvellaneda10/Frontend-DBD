import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Carga, Cotizacion, ListaTipoServicio, NombreServicio, Persona, Servicio, TipoCarga, TipoServicio } from 'src/app/interfaces';
import { DataService } from 'src/app/servicios/data.service';
import { ListarObjetosService } from 'src/app/servicios/listarObjetos.service';
import { ObtenerDatosPersonales } from 'src/app/servicios/obtenerDatosPersonales';
import { RegistrarSolicitudCotizacionService } from 'src/app/servicios/registrarSolicitudCotizacion.service';


@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.scss']
})
export class CotizacionComponent implements OnInit {
  @ViewChild('nombres') name?: ElementRef;
  selectedValueTipoServicio?: string;
  selectedValueNombreServicio?: string;
  selectedValueTipoCarga?: string;
  
  valor?: string;
  valorNombreServicio?: string;
  nombreTipoServicio?: string;
  valorNombreTipoServicio?: string;
  valorTipoCarga?: string;
  usuario?: string;
  nombre: string = 'Anthony';
  firstName: any;
  DNI?: string;
  persona?: Persona;

  // DATOS OBTENIDOS DEL FORMULARIO
  domicilio_retiro?: string;
  domicilio_envio?: string;
  peso?: Number;
  volumen?: Number;
  observacion?: string;
  nameTipoServicio?:string = '';
  typeServicio?:string;
  typeCarga?:string;

  dniSession: any;
  nombreSession: any;
  apellidPaternoSession: any;
  apellidoMaternoSession: any;
  phoneSession: any;
  correoSession: any;

  tipoServicio:  TipoServicio[] = [];
  tipoServicio2:  TipoServicio[] = [];
  nombreServicio: NombreServicio[] = [];
  tipoCarga: TipoCarga[] = [];
  tipoCarga2: TipoCarga[] = [];

  constructor(private listarObjetosService: ListarObjetosService, public dataService: DataService, 
    private obtenerDatosPersonales: ObtenerDatosPersonales, private registrarSolicitudCotizacionService: RegistrarSolicitudCotizacionService, 
    private router: Router, private titulo: Title) { 
      titulo.setTitle('Solicitar cotización')
    }

  ngOnInit(): void {
    //console.log(document.getElementById("DNI"));
    //document.getElementById("DNI")?.setAttribute("value", "hola")

    this.firstName = sessionStorage.getItem('Nombre')
    console.log("usuario: ", this.dataService.usuario)

    this.usuario = this.dataService.usuario
    this.obtenerDatosPersonales.obtenerDataPersona(this.usuario).subscribe( data => {
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

    //sessionStorage.setItem('Dni', this.persona?.dni!)
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
    document.getElementById("email")?.setAttribute("value", this.correoSession)
    
    this.tipoServicio = this.obtenerListaTipoServicios()

    /*this.listarObjetosService.listarTiposServicios().subscribe( data => {
      this.tipoServicio = data.lista;
      console.log("tipo: ", this.tipoServicio)
    });*/
    
    this.tipoCarga = this.obtenerListaTipoCarga();

    /*this.listarObjetosService.listarTiposCargas().subscribe( data => {
      this.tipoCarga = data.listaTipoCarga;
      console.log("sdf: ", this.tipoCarga )
    });*/

  }

  obtenerListaTipoServicios(): TipoServicio[] {
    let tipServicioUno: TipoServicio;
    let tipServicioDos: TipoServicio;
    tipServicioUno = {
      codigoTipoServicio: 1,
	    nombreTipoServicio:"Transporte Nacional"
    }

    tipServicioDos = {
      codigoTipoServicio: 2,
	    nombreTipoServicio:"Transporte Internacional"
    }
    this.tipoServicio2.push(tipServicioUno)
    this.tipoServicio2.push(tipServicioDos)
    return this.tipoServicio2
  }

  obtenerListaTipoCarga(): TipoCarga[] {
    let tipCargaUno: TipoCarga;
    let tipCargaDos: TipoCarga;
    let tipCargaTres: TipoCarga;
    tipCargaUno = {
        codigoTipoCarga: 21,
        nombreTipoCarga:"Liviano"
      }

      tipCargaDos = {
        codigoTipoCarga: 22,
        nombreTipoCarga:"Peso Regular"
      }

      tipCargaTres = {
        codigoTipoCarga: 23,
        nombreTipoCarga:"Pesado"
      }
      this.tipoCarga2.push(tipCargaUno)
      this.tipoCarga2.push(tipCargaDos)
      this.tipoCarga2.push(tipCargaTres)
      return this.tipoCarga2
  }
  

  public onChange(event:any): void { 
    console.log(event)
    const newal = event.target.value;
    
    console.log("description: ",  this.tipoServicio[newal - 1].nombreTipoServicio)
    //this.valorNombreTipoServicio = this.tipoServicio[newal - 1].nombreTipoServicio;
    this.valorNombreTipoServicio = newal;
    this.listarObjetosService.listarNombresServicios(newal).subscribe(data =>{
      this.nombreServicio = data.listaNombreServicio;
      console.log("Data: ",data);
    });
  }
  public onChanges(event:any): void { 
    const newals = event.target.value;
    console.log("Valor: ", newals);

    /*if(newals <= 9){
      console.log("description: ",  this.nombreServicio[newals - 6].nombreServicio)
      this.valorNombreServicio = this.nombreServicio[newals - 6].nombreServicio;
    }else{
      console.log("description: ",  this.nombreServicio[newals - 10].nombreServicio)
      this.valorNombreServicio = this.nombreServicio[newals - 10].nombreServicio;
    }*/
    this.valorNombreServicio = newals;
  }

  public onChangesCarga(event:any): void { 
    const newalss = event.target.value;
    console.log("Valor: ", newalss);

   console.log("description: ",  this.tipoCarga[newalss - 21].nombreTipoCarga),
    //this.valorTipoCarga = this.tipoCarga[newalss - 21].nombreTipoCarga,
    this.valorTipoCarga = newalss,
    console.log("valor tipo carga: ", this.valorTipoCarga)
    
  }

  solicitarCotizacion(){
      console.log("hola: ", this.usuario)
      console.log("hola mundo: ", this.correoSession)

      console.log("hola sesion: ", sessionStorage.getItem('email'))

    let formularioCotizacion: Cotizacion;

    formularioCotizacion = {
      domicilioRetiro: this.domicilio_retiro,
      domicilioEnvio: this.domicilio_envio,
      observaciones: this.observacion,
      correo: sessionStorage.getItem('email')!,
      tipoCarga: this.valorTipoCarga,
      peso: this.peso,
      volumen: this.volumen,
      servicio: this.valorNombreTipoServicio,
      nombreService: this.valorNombreServicio
    }

    console.log("correo: ", formularioCotizacion.correo)

    if(formularioCotizacion.correo != null && formularioCotizacion.domicilioEnvio != null &&
      formularioCotizacion.domicilioRetiro != null && formularioCotizacion.nombreService != null &&
      formularioCotizacion.observaciones != null && formularioCotizacion.peso != null && 
      formularioCotizacion.servicio != null && formularioCotizacion.tipoCarga != null && formularioCotizacion.volumen != null){
      
        this.registrarSolicitudCotizacionService.registrarSolicitud(formularioCotizacion).subscribe( data => {
          console.log("Pintar: ", data);
          alert('Solicitud aceptada :)'),
          
          this.router.navigate(['pantallaUsuario']);
            /*this.persona = data;
    
            this.nombreCompleto = this.persona.nombres + ' ' + this.persona.apellido_paterno; 
            this.dataService.usuario = this.correo;
            sessionStorage.setItem('Nombre', this.nombreCompleto)
            this.router.navigate(['pantallaUsuario']);*/
          }
        //}
        //,err => {this.mensaje = err;}
        );
        
    }
    else{
      alert('Error!, rellene todos los campos por favor')
    }
    
    
    
    

    //console.log("Hola: ", solicitarCotizacion.selectedValueTipoServicio)
    /*console.log("Domicilio retiro: ", this.domicilio_retiro)
    console.log("Domicilio Envio: ", this.domicilio_envio)
    console.log("Tipo carga: ", formularioCotizacion.selectedValueTipoCarga)
    console.log("Tipo servicio: ", formularioCotizacion.selectedValueTipoServicio)
    console.log("Nombre servicio: ", formularioCotizacion.selectedValueNombreServicio)
    console.log("Peso: ", this.peso)
    console.log("Volumen: ", this.volumen)
    console.log("Observacion: ", this.observacion)
    console.log("ID_USUARIO: ", this.correoSession)*/


    //this.obtenerDatosPersonales.registrarxxx(solicitarCotizacion,carga,servicio).subscribe( data => {
  }

}


