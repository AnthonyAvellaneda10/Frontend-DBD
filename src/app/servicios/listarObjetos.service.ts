import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ListaNombreServicio, ListaTipoCarga, ListaTipoServicio, Persona, TipoServicio, Usuario, UsuarioLogin } from '../interfaces';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListarObjetosService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8'
    })
  };
  errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    errorMessage = error.error.message;
    console.log("ShowError " + errorMessage);
    return throwError(errorMessage);
  }
  url: string = `http://localhost:8082/obtener-nombres-servicios`;
  constructor(private http: HttpClient) { }

  listarTiposServicios(): Observable<ListaTipoServicio>{

    return this.http.get<ListaTipoServicio>('http://localhost:8082/obtener-tipos-servicios');
  }

  listarNombresServicios(codigoTipoServicio: number){
    return this.http.get<ListaNombreServicio>(`${this.url}/${codigoTipoServicio}`);
  }

  listarTiposCargas(): Observable<ListaTipoCarga>{

    return this.http.get<ListaTipoCarga>('http://localhost:8082/obtener-tipo-cargas');
  }

  
}


