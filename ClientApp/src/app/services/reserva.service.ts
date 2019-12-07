import { Injectable, Inject } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
import { catchError , map, tap } from 'rxjs/operators';
import { Reserva } from '../models/reserva';

const httpOptions = {
headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl:string) { }
  
  addReserva(reserva:Reserva): Observable<Reserva> {
    
    return this.http.post<Reserva>(this.baseUrl+'api/Reserva',reserva,httpOptions).pipe(
      tap((newReserva: Reserva) => this.log(`added NewReserva w/ id=${newReserva.id}`)),
      catchError(this.handleError<Reserva>('addReserva'))
    );
  }

  getAll():Observable<Reserva[]>{
    return this.http.get<Reserva[]>(this.baseUrl+'api/Reserva').pipe(
      tap(_=>this.log('Se consulta la información')),
      catchError(this.handleError<Reserva[]>('getAll'))
    );
  }
  get(id: number): Observable<Reserva>
  {
    const url=`${this.baseUrl + 'api/Reserva'}/${id}`;
    return this.http.get<Reserva>(url).pipe(
      tap(_=>this.log(`fetched reserva id=${id}`)),
      catchError(this.handleError<Reserva>(`getHero id=${id}`))
    );
  }
  update(reserva: Reserva): Observable<any> {
    const url=`${this.baseUrl + 'api/Reserva'}/${reserva.id}`;
    return this.http.put(url,reserva,httpOptions).pipe(
      tap(_=>this.log(`updated reserva id=${reserva.id}`)),
      catchError(this.handleError<any>('reserva'))
    );
  }
  delete(reserva: Reserva | number): Observable<Reserva>{
    const id= typeof reserva === 'number' ? reserva: reserva.id;
    const url= `${this.baseUrl + 'api/Reserva'}/${id}`;

    return this.http.delete<Reserva>(url,httpOptions).pipe(
      tap(_=>this.log(`deleted reserva id=${id}`)),
      catchError(this.handleError<Reserva>('deletedReserva'))
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
    alert(`ReservaService: ${message}`);
  }
}
