import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Persona, Usuario, UsuarioNuevo } from 'src/app/interfaces';
import { RegistroService } from 'src/app/servicios/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  persona?: Persona;
  usuario?: Usuario;
  usuarioNuevo?: UsuarioNuevo;
  dni: string = '';
  correo: string = '';
  nombre: string = '';
  apellido_paterno: string = '';
  apellido_materno: string = '';
  nro_celular: string = '';
  contrasenia: string = '';
  mensaje: string = '';


  constructor(private router: Router, private titulo: Title, private registroService: RegistroService) { 
    titulo.setTitle('Registro de Usuario')
  }

  ngOnInit(): void {
  }

  registrarse(){
    let usuarioNuevo: UsuarioNuevo;

    usuarioNuevo = {
      dni: this.dni,
      correo: this.correo,
      nombres: this.nombre,
      apellido_paterno: this.apellido_paterno,
      apellido_materno: this.apellido_materno,
      nro_celular: this.nro_celular,
      contrasenia: this.contrasenia,
    }

    this.registroService.registrar(usuarioNuevo).subscribe( data => {
      /*if(data){
        //this.persona = data;
        this.router.navigate(['home']);
      }*/
      console.log(data);
      this.router.navigate(['login']);
    }
    ,err => {this.mensaje = err;}
    );
  }

  iniciaSesion(){
    this.router.navigate(['login']);
  }

}
