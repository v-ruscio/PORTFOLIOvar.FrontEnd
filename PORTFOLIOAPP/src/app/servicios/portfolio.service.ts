import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  URL = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient){ }
 
 


//trae los datos de persona de la base de datos
  public getPersona(): Observable<persona>{
      return this.http.get<persona>(this.URL+ 'traer/perfil');
  }

}
