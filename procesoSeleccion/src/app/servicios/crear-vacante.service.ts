import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VacanteModule } from '../modelos/vacante.model';

@Injectable({
  providedIn: 'root'
})
export class CrearVacanteService {

  private url = 'https://libros-demo-default-rtdb.firebaseio.com';
  constructor(private http: HttpClient){ }

  createVacantes(vacante: VacanteModule){
    return this.http.post(`${this.url}/vacante.json`, vacante);
  }
}
