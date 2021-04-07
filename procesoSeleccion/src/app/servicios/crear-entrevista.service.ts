import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntrevistaModule } from '../modelos/entrevista.model';

@Injectable({
  providedIn: 'root'
})
export class CrearEntrevistaService {

  private url = 'https://procesoseleccion-724a7-default-rtdb.firebaseio.com';
  constructor(private http: HttpClient){ }

  crearEntrevista(entrevista: EntrevistaModule, id_candidato: any, id_vacante: any){
    return this.http.post(`${this.url}/vacante/${id_vacante}/candidato/${id_candidato}/entrevista.json`, entrevista);
  }
}
