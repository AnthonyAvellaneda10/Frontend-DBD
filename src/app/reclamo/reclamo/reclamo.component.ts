import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { data } from 'jquery';
import { Reclamo } from 'src/app/interfaces';
import { RegistrarReclamoService } from 'src/app/servicios/registrarReclamo.service';

@Component({
  selector: 'app-reclamo',
  templateUrl: './reclamo.component.html',
  styleUrls: ['./reclamo.component.scss']
})
export class ReclamoComponent implements OnInit {
  dni: string = '';
  nombres : string = '';
  apellidoPaterno : string = '';
  apellidoMaterno : string = '';
  tipoReclamo ?: String;
  descripcion ?: String;
  constructor(private titulo: Title , private registrarReclamoService : RegistrarReclamoService) {
    titulo.setTitle('Reclamo')
   }

  ngOnInit(): void {
  }

  enviarReclamo(){
      let reclamo : Reclamo;
      reclamo = {
        tipo_reclamo : this.tipoReclamo,
        descripcion : this.descripcion,
        servicioTransporte : {
          usuario :{
            persona :{
              dni : "77206756"
            }
          }
        },
        personal : {
          cargo : "Encargado de reclamos"
        }
      }  

      this.registrarReclamoService.agregarReclamo(reclamo).subscribe(data => {
        console.log("Pintar Reclamo: ", data)
      })


      
  }

  

}
