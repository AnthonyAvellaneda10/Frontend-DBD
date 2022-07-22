import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, retry, throwError } from "rxjs";
import { EstadoEntrega, RegistroPago } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class ObtenerEstadoEntrega {
    htttpOption = {
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
    buscarEstadoEntrega(registroPago: RegistroPago) {
        return this.http.post<EstadoEntrega>('http://127.0.0.1:8082/estado-entrega', registroPago, this.htttpOption)
            .pipe(
                retry(0),
                catchError(this.errorHandl)
            );
    }
}