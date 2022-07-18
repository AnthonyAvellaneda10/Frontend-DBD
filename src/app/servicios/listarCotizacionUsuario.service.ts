import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ListaCotizacionUser, ListaNombreServicio, ListaTipoCarga, ListaTipoServicio, Persona, TipoServicio, Usuario, UsuarioLogin } from '../interfaces';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListarCotizacionUsuarioService {

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
  url: string = `http://localhost:8082/obtener-cotizacion-usuario`;
  constructor(private http: HttpClient) { }

  cotizacionesUsuario(correo?: string){
    return this.http.get<ListaCotizacionUser>(`${this.url}/${correo}`);
  }

  
}


