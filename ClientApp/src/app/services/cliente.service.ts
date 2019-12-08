import { Injectable, Inject } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
import { catchError , map, tap } from 'rxjs/operators';
import { Cliente } from '../models/cliente';

import { HandleErrorService } from '../@base/services/handle-error.service';

const httpOptions = {
headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: string;
  constructor(
      private http: HttpClient,
      @Inject('BASE_URL') baseUrl: string,
      private handleErrorService: HandleErrorService) {
      this.baseUrl = baseUrl;
  }

  addCliente(cliente:Cliente): Observable<Cliente> {
    
    return this.http.post<Cliente>(this.baseUrl+'api/Cliente',cliente,httpOptions)
    .pipe(
        tap(_ => this.handleErrorService.log('datos Registrados')),
        catchError(this.handleErrorService.handleError<Cliente>('Registro de Cliente', null))
    );
  }

  getAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl + 'api/Cliente')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Cliente[]>('Consulta Clientes', null))
        );
  }
  get(id: number): Observable<Cliente>
  {
    const url=`${this.baseUrl + 'api/Cliente'}/${id}`;
      return this.http.get<Cliente>(url)
          .pipe(
              tap(_ => this.handleErrorService.log('datos enviados')),
              catchError(this.handleErrorService.handleError<Cliente>('Consulta de Cliente', null))
          );
  
    
    
  }
  update(cliente: Cliente): Observable<any> {
    const url=`${this.baseUrl + 'api/Cliente'}/${cliente.identificacion}`;
    
    return this.http.put<Cliente>(url,cliente,httpOptions)
    .pipe(
        tap(_ => this.handleErrorService.log('datos Modificados')),
        catchError(this.handleErrorService.handleError<Cliente>('Modificar de Cliente', null))
    );
    
  }
  delete(cliente: Cliente | number): Observable<Cliente>{
    const id= typeof cliente === 'number' ? cliente: cliente.identificacion;
    const url= `${this.baseUrl + 'api/Cliente'}/${id}`;

    
    return this.http.delete<Cliente>(url,httpOptions)
    .pipe(
        tap(_ => this.handleErrorService.log('datos Elimindos')),
        catchError(this.handleErrorService.handleError<Cliente>('Eliminacion de Cliente', null))
    );
  }
  
  
  get1(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl + 'api/Cliente')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Cliente[]>('Consulta Clientes', null))
        );
}

getByIdentificacion(identificacion:string): Observable<Cliente> {
    return this.http.get<Cliente>(this.baseUrl + 'api/Cliente/' + identificacion)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Cliente>('Consulta de Cliente', null))
        );
}
}