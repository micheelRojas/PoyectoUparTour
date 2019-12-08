import { Injectable, Inject } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
import { catchError , map, tap } from 'rxjs/operators';
import { Restaurante } from '../models/restaurante';
import { HandleErrorService } from '../@base/services/handle-error.service';
import { RestauranteViewModel } from '../clientes/restaurante-view-model';
const httpOptions = {
headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  baseUrl: string;
  constructor(
      private http: HttpClient,
      @Inject('BASE_URL') baseUrl: string,
      private handleErrorService: HandleErrorService) {
      this.baseUrl = baseUrl;
  }
  
  addRestaurante(restaurante:Restaurante): Observable<Restaurante> {
    
    return this.http.post<Restaurante>(this.baseUrl+'api/Restaurante',restaurante,httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos Registrados')),
      catchError(this.handleErrorService.handleError<Restaurante>('Registro de Restaurante', null))
  );
  }

  getAll():Observable<Restaurante[]>{
    return this.http.get<Restaurante[]>(this.baseUrl+'api/Restaurante').pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Restaurante[]>('Consulta Restaurantes', null))
  );
  }
  get(id: number): Observable<Restaurante>
  {
    const url=`${this.baseUrl + 'api/Restaurante'}/${id}`;
    return this.http.get<Restaurante>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Restaurante>('Consulta de Restaurante', null))
  );
  }
  update(restaurante: Restaurante): Observable<any> {
    const url=`${this.baseUrl + 'api/Restaurante'}/${restaurante.id}`;
    return this.http.put(url,restaurante,httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos Modificados')),
      catchError(this.handleErrorService.handleError<Restaurante>('Modificar de Restaurante', null))
  
    );
  }
  delete(restaurante: Restaurante | number): Observable<Restaurante>{
    const id= typeof restaurante === 'number' ? restaurante: restaurante.id;
    const url= `${this.baseUrl + 'api/Restaurante'}/${id}`;

    return this.http.delete<Restaurante>(url,httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos Elimindos')),
      catchError(this.handleErrorService.handleError<Restaurante>('Eliminacion de Restaurante', null))
  );
  }
  get1(): Observable<RestauranteViewModel[]> {
    return this.http.get<RestauranteViewModel[]>(this.baseUrl + 'api/Restaurante')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<RestauranteViewModel[]>('Consulta Restaurantes', null))
        );
}

getByIdentificacion(identificacion:string): Observable<RestauranteViewModel> {
    return this.http.get<RestauranteViewModel>(this.baseUrl + 'api/Restaurante/' + identificacion)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<RestauranteViewModel>('Consulta de Restaurante', null))
        );
}
}

