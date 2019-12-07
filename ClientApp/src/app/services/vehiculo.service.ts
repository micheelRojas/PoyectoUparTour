import { Injectable, Inject } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
import { catchError , map, tap } from 'rxjs/operators';
import { Vehiculo } from '../models/vehiculo';

const httpOptions = {
headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl:string) { }
  
  addVehiculo(vehiculo:Vehiculo): Observable<Vehiculo> {
    
    return this.http.post<Vehiculo>(this.baseUrl+'api/Vehiculo',vehiculo,httpOptions).pipe(
      tap((newVehiculo: Vehiculo) => this.log(`added NewVehiculo w/ id=${newVehiculo.placa}`)),
      catchError(this.handleError<Vehiculo>('addVehiculo'))
    );
  }

  getAll():Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(this.baseUrl+'api/Vehiculo').pipe(
      tap(_=>this.log('Se consulta la información')),
      catchError(this.handleError<Vehiculo[]>('getAll'))
    );
  }
  get(id: string): Observable<Vehiculo>
  {
    const url=`${this.baseUrl + 'api/Vehiculo'}/${id}`;
    return this.http.get<Vehiculo>(url).pipe(
      tap(_=>this.log(`fetched vehiculo id=${id}`)),
      catchError(this.handleError<Vehiculo>(`getHero id=${id}`))
    );
  }
  update(vehiculo: Vehiculo): Observable<any> {
    const url=`${this.baseUrl + 'api/Vehiculo'}/${vehiculo.placa}`;
    return this.http.put(url,vehiculo,httpOptions).pipe(
      tap(_=>this.log(`updated vehiculo id=${vehiculo.placa}`)),
      catchError(this.handleError<any>('vehiculo'))
    );
  }
  delete(vehiculo: Vehiculo | number): Observable<Vehiculo>{
    const id= typeof vehiculo === 'number' ? vehiculo: vehiculo.placa;
    const url= `${this.baseUrl + 'api/Vehiculo'}/${id}`;

    return this.http.delete<Vehiculo>(url,httpOptions).pipe(
      tap(_=>this.log(`deleted vehiculo id=${id}`)),
      catchError(this.handleError<Vehiculo>('deletedVehiculo'))
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
    alert(`VehiculoService: ${message}`);
  }
}

