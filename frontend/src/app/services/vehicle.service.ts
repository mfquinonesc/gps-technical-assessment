import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  
  path: string = `${environment.APIURL}/vehicle/vehicles`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.path}`);
  }

  get(id: number): Observable<any> {
    return this.http.get(`${this.path}/${id}`);
  }

  create(ve: Vehicle): Observable<any> {
    return this.http.post(`${this.path}/`, ve);
  }

  update(id: number, ve: Vehicle): Observable<any> {
    return this.http.put(`${this.path}/${id}/`, ve);
  }

  delete(id:number):Observable<any>{
    return this.http.delete(`${this.path}/${id}/`);
  } 
}
