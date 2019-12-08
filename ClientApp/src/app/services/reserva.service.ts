import { Injectable, Inject } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
import { catchError , map, tap } from 'rxjs/operators';
import { Reserva } from '../models/reserva';
import { HandleErrorService } from '../@base/services/handle-error.service';
import { ReservaViewModel } from '../clientes/reserva-view-model';
const httpOptions = {
headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  baseUrl: string;
  constructor(
      private http: HttpClient,
      @Inject('BASE_URL') baseUrl: string,
      private handleErrorService: HandleErrorService) {
      this.baseUrl = baseUrl;
  }
  
  addReserva(reserva:Reserva): Observable<Reserva> {
    
    return this.http.post<Reserva>(this.baseUrl+'api/Reserva',reserva,httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos Registrados')),
      catchError(this.handleErrorService.handleError<Reserva>('Registro de Reserva', null)));
  }

  getAll():Observable<Reserva[]>{
    return this.http.get<Reserva[]>(this.baseUrl+'api/Reserva').pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Reserva[]>('Consulta Reservas', null))
  );
  }
  get(id: number): Observable<Reserva>
  {
    const url=`${this.baseUrl + 'api/Reserva'}/${id}`;
    return this.http.get<Reserva>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Reserva>('Consulta de Reserva', null))
  );
  }
  update(reserva: Reserva): Observable<any> {
    const url=`${this.baseUrl + 'api/Reserva'}/${reserva.id}`;
    return this.http.put(url,reserva,httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos Modificados')),
      catchError(this.handleErrorService.handleError<Reserva>('Modificar de Reserva', null))
  );
  }
  delete(reserva: Reserva | number): Observable<Reserva>{
    const id= typeof reserva === 'number' ? reserva: reserva.id;
    const url= `${this.baseUrl + 'api/Reserva'}/${id}`;

    return this.http.delete<Reserva>(url,httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos Elimindos')),
      catchError(this.handleErrorService.handleError<Reserva>('Eliminacion de Reserva', null))
  );
  }
  get1(): Observable<ReservaViewModel[]> {
    return this.http.get<ReservaViewModel[]>(this.baseUrl + 'api/Reserva')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<ReservaViewModel[]>('Consulta de Reserva', null))
        );
}

getByIdentificacion(identificacion:string): Observable<ReservaViewModel> {
    return this.http.get<ReservaViewModel>(this.baseUrl + 'api/Reserva/' + identificacion)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<ReservaViewModel>('Consulta de Reserva', null))
        );
}
}
