import { Injectable, Inject } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
import { catchError , map, tap } from 'rxjs/operators';
import { Hotel } from '../models/hotel';

import { HandleErrorService } from '../@base/services/handle-error.service';
import { HotelViewModel } from '../clientes/hotel-view-model';


const httpOptions = {
headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  baseUrl: string;
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') baseUrl: string,
        private handleErrorService: HandleErrorService) {
        this.baseUrl = baseUrl;
    }

   

    getByIdentificacion(identificacion:string): Observable<HotelViewModel> {
        return this.http.get<HotelViewModel>(this.baseUrl + 'api/Hotel/' + identificacion)
            .pipe(
                tap(_ => this.handleErrorService.log('datos enviados')),
                catchError(this.handleErrorService.handleError<HotelViewModel>('Consulta de hoteles', null))
            );
    }

  
  addHotel(hotel:Hotel): Observable<Hotel> {
    
    
    return this.http.post<Hotel>(this.baseUrl+'api/Hotel',hotel,httpOptions)
    .pipe(
        tap(_ => this.handleErrorService.log('datos Registrados')),
        catchError(this.handleErrorService.handleError<Hotel>('Registro de hoteles', null))
    );
  }
  getAll():Observable<Hotel[]>{
    
    return this.http.get<Hotel[]>(this.baseUrl + 'api/Hotel')
    .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Hotel[]>('Consulta Hoteles', null))
    );
  }

  get1():Observable<HotelViewModel[]>{
    return this.http.get<HotelViewModel[]>(this.baseUrl + 'api/Hotel')
            .pipe(
                tap(_ => this.handleErrorService.log('datos enviados')),
                catchError(this.handleErrorService.handleError<HotelViewModel[]>('Consulta Hoteles', null))
            );
   

  }

  get(id: number): Observable<Hotel>
  {
    const url=`${this.baseUrl + 'api/Hotel'}/${id}`;
    
    return this.http.get<Hotel>(url)
            .pipe(
                tap(_ => this.handleErrorService.log('datos enviados')),
                catchError(this.handleErrorService.handleError<Hotel>('Consulta de hoteles', null))
            );
  }
  update(hotel: Hotel): Observable<any> {
    const url=`${this.baseUrl + 'api/Hotel'}/${hotel.id}`;
    
    
    return this.http.put<Hotel>(url,hotel,httpOptions)
            .pipe(
                tap(_ => this.handleErrorService.log('datos enviados')),
                catchError(this.handleErrorService.handleError<Hotel>('Consulta de hoteles', null))
            );
    
  }
  delete(hotel: Hotel | number): Observable<Hotel>{
    const id= typeof hotel === 'number' ? hotel: hotel.id;
    const url= `${this.baseUrl + 'api/Hotel'}/${id}`;

   
    return this.http.delete<Hotel>(url,httpOptions)
            .pipe(
                tap(_ => this.handleErrorService.log('datos enviados')),
                catchError(this.handleErrorService.handleError<Hotel>('Consulta de hoteles', null))
            );
  }
 
  private log(message: string){
    alert(`HotelService: ${message}`);
  }
}

