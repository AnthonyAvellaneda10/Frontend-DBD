import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Cotizacion, Persona, Usuario, UsuarioLogin } from '../interfaces';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrarSolicitudCotizacionService {

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
  constructor(private http: HttpClient) { }

  registrarSolicitud(formularioCotizacion: Cotizacion){
  
    return this.http.post<void>('http://localhost:8082/solicitar-cotizacion', formularioCotizacion, this.httpOptions)
        .pipe(
          retry(0),
          catchError(this.errorHandl)
        );
  }

  
}


