import { Injectable, Inject } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
import { catchError , map, tap } from 'rxjs/operators';
import { Lugar } from '../models/lugar';

const httpOptions = {
headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl:string) { }

  addLugar(lugar:Lugar): Observable<Lugar> {
    return this.http.post<Lugar>(this.baseUrl+'api/Lugar',lugar,httpOptions).pipe(
      tap((newLugar: Lugar) => this.log(`added NewLugar w/ id=${newLugar.id}`)),
      catchError(this.handleError<Lugar>('addLugar'))
    );
  }

  getAll():Observable<Lugar[]>{
    return this.http.get<Lugar[]>(this.baseUrl+'api/Lugar').pipe(
      tap(_=>this.log('Se consulta la información')),
      catchError(this.handleError<Lugar[]>('getAll'))
    );
  }
  get(id: number): Observable<Lugar>
  {
    const url=`${this.baseUrl + 'api/Lugar'}/${id}`;
    return this.http.get<Lugar>(url).pipe(
      tap(_=>this.log(`fetched lugar id=${id}`)),
      catchError(this.handleError<Lugar>(`getHero id=${id}`))
    );
  }
  update(lugar: Lugar): Observable<any> {
    const url=`${this.baseUrl + 'api/Lugar'}/${lugar.id}`;
    return this.http.put(url,lugar,httpOptions).pipe(
      tap(_=>this.log(`updated lugar id=${lugar.id}`)),
      catchError(this.handleError<any>('lugar'))
    );
  }
  delete(lugar: Lugar | number): Observable<Lugar>{
    const id= typeof lugar === 'number' ? lugar: lugar.id;
    const url= `${this.baseUrl + 'api/Lugar'}/${id}`;

    return this.http.delete<Lugar>(url,httpOptions).pipe(
      tap(_=>this.log(`deleted lugar id=${id}`)),
      catchError(this.handleError<Lugar>('deletedLugar'))
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
    console.log(`LugarService: ${message}`);
  }
}

