import { Injectable, Inject } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
import { catchError , map, tap } from 'rxjs/operators';
import { Hotel } from '../models/hotel';

const httpOptions = {
headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl:string) { }
  
  addHotel(hotel:Hotel): Observable<Hotel> {
    
    return this.http.post<Hotel>(this.baseUrl+'api/Hotel',hotel,httpOptions).pipe(
      tap((newHotel: Hotel) => this.log(`added NewHotel w/ id=${newHotel.id}`)),
      catchError(this.handleError<Hotel>('addHotel'))
    );
  }

  getAll():Observable<Hotel[]>{
    return this.http.get<Hotel[]>(this.baseUrl+'api/Hotel').pipe(
      tap(_=>this.log('Se consulta la información')),
      catchError(this.handleError<Hotel[]>('getAll'))
    );
  }
  get(id: number): Observable<Hotel>
  {
    const url=`${this.baseUrl + 'api/Hotel'}/${id}`;
    return this.http.get<Hotel>(url).pipe(
      tap(_=>this.log(`fetched hotel id=${id}`)),
      catchError(this.handleError<Hotel>(`getHero id=${id}`))
    );
  }
  update(hotel: Hotel): Observable<any> {
    const url=`${this.baseUrl + 'api/Hotel'}/${hotel.id}`;
    return this.http.put(url,hotel,httpOptions).pipe(
      tap(_=>this.log(`updated hotel id=${hotel.id}`)),
      catchError(this.handleError<any>('hotel'))
    );
  }
  delete(hotel: Hotel | number): Observable<Hotel>{
    const id= typeof hotel === 'number' ? hotel: hotel.id;
    const url= `${this.baseUrl + 'api/Hotel'}/${id}`;

    return this.http.delete<Hotel>(url,httpOptions).pipe(
      tap(_=>this.log(`deleted hotel id=${id}`)),
      catchError(this.handleError<Hotel>('deletedHotel'))
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
    alert(`HotelService: ${message}`);
  }
}

