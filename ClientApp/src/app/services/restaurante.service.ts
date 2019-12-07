import { Injectable, Inject } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
import { catchError , map, tap } from 'rxjs/operators';
import { Restaurante } from '../models/restaurante';

const httpOptions = {
headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl:string) { }
  
  addRestaurante(restaurante:Restaurante): Observable<Restaurante> {
    
    return this.http.post<Restaurante>(this.baseUrl+'api/Restaurante',restaurante,httpOptions).pipe(
      tap((newRestaurante: Restaurante) => this.log(`added NewRestaurante w/ id=${newRestaurante.id}`)),
      catchError(this.handleError<Restaurante>('addRestaurante'))
    );
  }

  getAll():Observable<Restaurante[]>{
    return this.http.get<Restaurante[]>(this.baseUrl+'api/Restaurante').pipe(
      tap(_=>this.log('Se consulta la información')),
      catchError(this.handleError<Restaurante[]>('getAll'))
    );
  }
  get(id: number): Observable<Restaurante>
  {
    const url=`${this.baseUrl + 'api/Restaurante'}/${id}`;
    return this.http.get<Restaurante>(url).pipe(
      tap(_=>this.log(`fetched restaurante id=${id}`)),
      catchError(this.handleError<Restaurante>(`getHero id=${id}`))
    );
  }
  update(restaurante: Restaurante): Observable<any> {
    const url=`${this.baseUrl + 'api/Restaurante'}/${restaurante.id}`;
    return this.http.put(url,restaurante,httpOptions).pipe(
      tap(_=>this.log(`updated restaurante id=${restaurante.id}`)),
      catchError(this.handleError<any>('restaurante'))
    );
  }
  delete(restaurante: Restaurante | number): Observable<Restaurante>{
    const id= typeof restaurante === 'number' ? restaurante: restaurante.id;
    const url= `${this.baseUrl + 'api/Restaurante'}/${id}`;

    return this.http.delete<Restaurante>(url,httpOptions).pipe(
      tap(_=>this.log(`deleted restaurante id=${id}`)),
      catchError(this.handleError<Restaurante>('deletedRestaurante'))
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
    alert(`RestauranteService: ${message}`);
  }
}

