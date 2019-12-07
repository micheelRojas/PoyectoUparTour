import { Injectable, Inject } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
import { catchError , map, tap } from 'rxjs/operators';
import { Conductor } from '../models/conductor';

const httpOptions = {
headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl:string) { }

  addConductor(conductor:Conductor): Observable<Conductor> {
    return this.http.post<Conductor>(this.baseUrl+'api/Conductor',conductor,httpOptions).pipe(
      tap((newConductor: Conductor) => this.log(`added NewConductor w/ id=${newConductor.identificacion}`)),
      catchError(this.handleError<Conductor>('addConductor'))
    );
  }

  getAll():Observable<Conductor[]>{
    return this.http.get<Conductor[]>(this.baseUrl+'api/Conductor').pipe(
      tap(_=>this.log('Se consulta la información')),
      catchError(this.handleError<Conductor[]>('getAll'))
    );
  }
  get(id: number): Observable<Conductor>
  {
    const url=`${this.baseUrl + 'api/Conductor'}/${id}`;
    return this.http.get<Conductor>(url).pipe(
      tap(_=>this.log(`fetched conductor id=${id}`)),
      catchError(this.handleError<Conductor>(`getHero id=${id}`))
    );
  }
  update(conductor: Conductor): Observable<any> {
    const url=`${this.baseUrl + 'api/Conductor'}/${conductor.identificacion}`;
    return this.http.put(url,conductor,httpOptions).pipe(
      tap(_=>this.log(`updated conductor id=${conductor.identificacion}`)),
      catchError(this.handleError<any>('conductor'))
    );
  }
  delete(conductor: Conductor | number): Observable<Conductor>{
    const id= typeof conductor === 'number' ? conductor: conductor.identificacion;
    const url= `${this.baseUrl + 'api/Conductor'}/${id}`;

    return this.http.delete<Conductor>(url,httpOptions).pipe(
      tap(_=>this.log(`deleted conductor id=${id}`)),
      catchError(this.handleError<Conductor>('deletedConductor'))
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
    console.log(`ConductorService: ${message}`);
  }
}

