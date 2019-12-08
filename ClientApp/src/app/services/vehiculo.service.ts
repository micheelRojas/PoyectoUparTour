import { Injectable, Inject } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
import { catchError , map, tap } from 'rxjs/operators';
import { Vehiculo } from '../models/vehiculo';
import { HandleErrorService } from '../@base/services/handle-error.service';
import { VehiculoViewModel } from '../clientes/vehiculo-view-model';
const httpOptions = {
headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  baseUrl: string;
  constructor(
      private http: HttpClient,
      @Inject('BASE_URL') baseUrl: string,
      private handleErrorService: HandleErrorService) {
      this.baseUrl = baseUrl;
  }
  
  addVehiculo(vehiculo:Vehiculo): Observable<Vehiculo> {
    
    return this.http.post<Vehiculo>(this.baseUrl+'api/Vehiculo',vehiculo,httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos Registrados')),
      catchError(this.handleErrorService.handleError<Vehiculo>('Registro de Vehiculo', null))
  );
  }

  getAll():Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(this.baseUrl+'api/Vehiculo').pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Vehiculo[]>('Consulta Vehiculos', null))
  );
  }
  get(id: string): Observable<Vehiculo>
  {
    const url=`${this.baseUrl + 'api/Vehiculo'}/${id}`;
    return this.http.get<Vehiculo>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Vehiculo>('Consulta de Vehiculo', null))
  );
  }
  update(vehiculo: Vehiculo): Observable<any> {
    const url=`${this.baseUrl + 'api/Vehiculo'}/${vehiculo.placa}`;
    return this.http.put(url,vehiculo,httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos Modificados')),
      catchError(this.handleErrorService.handleError<Vehiculo>('Modificar de Vehiculo', null))
  );
  }
  delete(vehiculo: Vehiculo | number): Observable<Vehiculo>{
    const id= typeof vehiculo === 'number' ? vehiculo: vehiculo.placa;
    const url= `${this.baseUrl + 'api/Vehiculo'}/${id}`;

    return this.http.delete<Vehiculo>(url,httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos Elimindos')),
      catchError(this.handleErrorService.handleError<Vehiculo>('Eliminacion de Vehiculo', null))
  );
  }
  get1(): Observable<VehiculoViewModel[]> {
    return this.http.get<VehiculoViewModel[]>(this.baseUrl + 'api/Vehiculo')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<VehiculoViewModel[]>('Consulta Vehiculos', null))
        );
}

getByIdentificacion(identificacion:string): Observable<VehiculoViewModel> {
    return this.http.get<VehiculoViewModel>(this.baseUrl + 'api/Vehiculo/' + identificacion)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<VehiculoViewModel>('Consulta de Vehiculo', null))
        );
}
}

