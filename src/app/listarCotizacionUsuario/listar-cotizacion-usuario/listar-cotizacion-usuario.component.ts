import { Component, OnInit } from '@angular/core';
import { CotizacionUser } from 'src/app/interfaces';
import { DataService } from 'src/app/servicios/data.service';
import { ListarCotizacionUsuarioService } from 'src/app/servicios/listarCotizacionUsuario.service';

@Component({
  selector: 'app-listar-cotizacion-usuario',
  templateUrl: './listar-cotizacion-usuario.component.html',
  styleUrls: ['./listar-cotizacion-usuario.component.scss']
})
export class ListarCotizacionUsuarioComponent implements OnInit {
  usuario?: string;
  firstName?: any
  cotizacionUser: CotizacionUser[] = [];

  constructor(public dataService: DataService, private listarCotizacionUsuarioService: ListarCotizacionUsuarioService) { 

    
  }

  ngOnInit(): void {
    this.firstName = sessionStorage.getItem('Nombre')
    console.log("usuario: ", this.dataService.usuario)

    this.usuario = this.dataService.usuario
    this.listarCotizacionUsuarioService.cotizacionesUsuario(this.usuario).subscribe( data => {
      this.cotizacionUser = data.listaCotizacionUsuario;
      console.log("Data usuario: ", data)
    });
  }

}
