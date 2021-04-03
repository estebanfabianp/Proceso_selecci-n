import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VacanteModule } from '../modelos/vacante.model';

@Injectable({
  providedIn: 'root'
})
export class CrearVacanteService {

  private url = 'https://procesoseleccion-724a7-default-rtdb.firebaseio.com';
  constructor(private http: HttpClient){ }

  crearVacantes(vacante: VacanteModule){
    return this.http.post(`${this.url}/vacante.json`, vacante);
  }
}
