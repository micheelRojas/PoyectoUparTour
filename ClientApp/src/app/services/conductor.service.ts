import { Injectable, Inject } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
import { catchError , map, tap } from 'rxjs/operators';
import { Conductor } from '../models/conductor';
import { HandleErrorService } from '../@base/services/handle-error.service';
import { ConductorViewModel } from '../clientes/conductor-view-model';
const httpOptions = {
headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  baseUrl: string;
  constructor(
      private http: HttpClient,
      @Inject('BASE_URL') baseUrl: string,
      private handleErrorService: HandleErrorService) {
      this.baseUrl = baseUrl;
  }

  addConductor(conductor:Conductor): Observable<Conductor> {
    return this.http.post<Conductor>(this.baseUrl+'api/Conductor',conductor,httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos Registrados')),
      catchError(this.handleErrorService.handleError<Conductor>('Registro de Conducotr', null))
  );
  }

  getAll():Observable<Conductor[]>{
    return this.http.get<Conductor[]>(this.baseUrl+'api/Conductor')   .pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Conductor[]>('Consulta Conductores', null))
  );
  }
  get(id: number): Observable<Conductor>
  {
    const url=`${this.baseUrl + 'api/Conductor'}/${id}`;
    return this.http.get<Conductor>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Conductor>('Consulta de Conductor', null))
  );
  }
  update(conductor: Conductor): Observable<any> {
    const url=`${this.baseUrl + 'api/Conductor'}/${conductor.identificacion}`;
    return this.http.put(url,conductor,httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos Modificados')),
      catchError(this.handleErrorService.handleError<Conductor>('Modificar de  Conductor', null))
  );
  }
  delete(conductor: Conductor | number): Observable<Conductor>{
    const id= typeof conductor === 'number' ? conductor: conductor.identificacion;
    const url= `${this.baseUrl + 'api/Conductor'}/${id}`;

    return this.http.delete<Conductor>(url,httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos Elimindos')),
      catchError(this.handleErrorService.handleError<Conductor>('Eliminacion de  Conductor', null))
  );
  }
  get1(): Observable<ConductorViewModel[]> {
    return this.http.get<ConductorViewModel[]>(this.baseUrl + 'api/Conductor')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<ConductorViewModel[]>('Consulta de Conductores', null))
        );
}

getByIdentificacion(identificacion:string): Observable<ConductorViewModel> {
    return this.http.get<ConductorViewModel>(this.baseUrl + 'api/Conductor/' + identificacion)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<ConductorViewModel>('Consulta de Conductor', null))
        );
}
}

