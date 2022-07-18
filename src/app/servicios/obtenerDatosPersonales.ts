import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ListaNombreServicio, ListaTipoCarga, ListaTipoServicio, Persona, TipoServicio, Usuario, UsuarioLogin } from '../interfaces';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObtenerDatosPersonales {

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
  url: string = `http://localhost:8082/obtener-datos-usuario`;
  constructor(private http: HttpClient) { }

 /* obtenerDataPersona(correo?: string){
    console.log("correo: ", correo)
    return this.http.get<Persona>(`${this.url}/${correo}`);
  }*/

  obtenerDataPersona(correo?: string){
  
    return this.http.post<Persona>(`${this.url}/${correo}`, null, this.httpOptions)
        .pipe(
          retry(0),
          catchError(this.errorHandl)
        );
  }
}


