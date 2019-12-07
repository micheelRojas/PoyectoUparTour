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
    return this.http.post<Cliente>(this.baseUrl+'api/Cliente',cliente,httpOptions).pipe(
      tap((newCliente: Cliente) => this.log(`added NewCliente w/ id=${newCliente.identificacion}`)),
      catchError(this.handleError<Cliente>('addCliente'))
    );
  }

  getAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl+'api/Cliente').pipe(
      tap(_=>this.log('Se consulta la información')),
      catchError(this.handleError<Cliente[]>('getAll'))
    );
  }
  get(id: number): Observable<Cliente>
  {
    const url=`${this.baseUrl + 'api/Cliente'}/${id}`;
    return this.http.get<Cliente>(url).pipe(
      tap(_=>this.log(`fetched cliente id=${id}`)),
      catchError(this.handleError<Cliente>(`getHero id=${id}`))
    );
  }
  update(cliente: Cliente): Observable<any> {
    const url=`${this.baseUrl + 'api/Cliente'}/${cliente.identificacion}`;
    return this.http.put(url,cliente,httpOptions).pipe(
      tap(_=>this.log(`updated cliente id=${cliente.identificacion}`)),
      catchError(this.handleError<any>('cliente'))
    );
  }
  delete(cliente: Cliente | number): Observable<Cliente>{
    const id= typeof cliente === 'number' ? cliente: cliente.identificacion;
    const url= `${this.baseUrl + 'api/Cliente'}/${id}`;

    return this.http.delete<Cliente>(url,httpOptions).pipe(
      tap(_=>this.log(`deleted cliente id=${id}`)),
      catchError(this.handleError<Cliente>('deletedCliente'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string){
    console.log(`ClienteService: ${message}`);
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