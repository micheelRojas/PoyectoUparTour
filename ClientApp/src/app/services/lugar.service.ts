import { Injectable, Inject } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
import { catchError , map, tap } from 'rxjs/operators';
import { Lugar } from '../models/lugar';
import { HandleErrorService } from '../@base/services/handle-error.service';
import { LugarViewModel } from '../clientes/lugar-view-model';
const httpOptions = {
headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  baseUrl: string;
  constructor(
      private http: HttpClient,
      @Inject('BASE_URL') baseUrl: string,
      private handleErrorService: HandleErrorService) {
      this.baseUrl = baseUrl;
  }

  addLugar(lugar:Lugar): Observable<Lugar> {
    return this.http.post<Lugar>(this.baseUrl+'api/Lugar',lugar,httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos Registrados')),
      catchError(this.handleErrorService.handleError<Lugar>('Registro de Lugar', null))
  );
  }

  getAll():Observable<Lugar[]>{
    return this.http.get<Lugar[]>(this.baseUrl+'api/Lugar')   .pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Lugar[]>('Consulta Lugares', null))
  );
  }
  get(id: number): Observable<Lugar>
  {
    const url=`${this.baseUrl + 'api/Lugar'}/${id}`;
    return this.http.get<Lugar>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Lugar>('Consulta de Lugar', null))
  );
  }
  update(lugar: Lugar): Observable<any> {
    const url=`${this.baseUrl + 'api/Lugar'}/${lugar.id}`;
    return this.http.put(url,lugar,httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos Modificados')),
      catchError(this.handleErrorService.handleError<Lugar>('Modificar de Lugar', null))
  );
  }
  delete(lugar: Lugar | number): Observable<Lugar>{
    const id= typeof lugar === 'number' ? lugar: lugar.id;
    const url= `${this.baseUrl + 'api/Lugar'}/${id}`;

    return this.http.delete<Lugar>(url,httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos Elimindos')),
      catchError(this.handleErrorService.handleError<Lugar>('Eliminacion de Lugar', null))
  );
  }
  get1(): Observable<LugarViewModel[]> {
    return this.http.get<LugarViewModel[]>(this.baseUrl + 'api/Lugar')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<LugarViewModel[]>('Consulta Lugares', null))
        );
}

getByIdentificacion(identificacion:string): Observable<LugarViewModel> {
    return this.http.get<LugarViewModel>(this.baseUrl + 'api/Lugar/' + identificacion)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<LugarViewModel>('Consulta de Lugar', null))
        );
}
}

