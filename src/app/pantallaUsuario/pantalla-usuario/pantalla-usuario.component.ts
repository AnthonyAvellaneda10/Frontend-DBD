import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-pantalla-usuario',
  templateUrl: './pantalla-usuario.component.html',
  styleUrls: ['./pantalla-usuario.component.scss']
})
export class PantallaUsuarioComponent implements OnInit {
  firstName: any = 'hola';


  constructor(public dataService: DataService, private router:Router, private titulo: Title) { 
    titulo.setTitle('Pantalla de Usuario')
    
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('Nombre') != null){
      this.firstName = sessionStorage.getItem('Nombre')
    }
    
    console.log("Sesion: ", this.firstName);
    //this.firstName = JSON.parse(sessionStorage.getItem('Nombre') || "[]")
    
  }
  cerrarSesion(){
    this.router.navigate(['login']);
    //sessionStorage.removeItem('Nombre')
    sessionStorage.clear()
  }

}
