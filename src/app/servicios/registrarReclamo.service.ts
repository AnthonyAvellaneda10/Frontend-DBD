import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Reclamo} from '../interfaces';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrarReclamoService {

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

  agregarReclamo(reclamo: Reclamo){
  
    return this.http.post<Reclamo>('http://localhost:8082/agregar-reclamoo', reclamo, this.httpOptions)
        .pipe(
          retry(0),
          catchError(this.errorHandl)
        );
  }

  
}
