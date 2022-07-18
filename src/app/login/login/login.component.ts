import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Persona, Usuario, UsuarioLogin } from 'src/app/interfaces';
import { LoginService } from 'src/app/servicios/login.service';
import { DataService } from 'src/app/servicios/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  correo: string = '';
  contrasenia: string = '';
  mensaje: string = '';
  error: string = "";
  form?: FormGroup;
  usuarioLogin?: UsuarioLogin;
  usuario?: Usuario;
  persona?: Persona;
  nombreCompleto?: string;

  constructor(private router:Router, private titulo: Title, private loginService:LoginService, public dataService: DataService) {
    titulo.setTitle('Login')
  }

  ngOnInit(): void {
  }

  iniciarSesion(){
    let usuarioLogin: UsuarioLogin;

    usuarioLogin = {
      correo: this.correo,
      contrasenia: this.contrasenia
    }

    this.loginService.login(usuarioLogin).subscribe( data => {
      if(data){
        console.log("Pintar: ", data);
        this.persona = data;

        this.nombreCompleto = this.persona.nombres + ' ' + this.persona.apellido_paterno; 
        this.dataService.usuario = this.correo;
        sessionStorage.setItem('Nombre', this.nombreCompleto)
        this.router.navigate(['pantallaUsuario']);
      }
    },err => {this.mensaje = err;});
  }

  registrate(){
    this.router.navigate(['registro']);
  }
  
}
