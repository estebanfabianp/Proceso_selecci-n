import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidatoModule } from '../modelos/candidato.model';

@Injectable({
  providedIn: 'root'
})
export class CrearCandidatoService {
  private url = 'https://libros-demo-default-rtdb.firebaseio.com';
  constructor(private http: HttpClient){ }

  crearCandidatos(candidato: CandidatoModule, id: any){
    return this.http.post(`${this.url}/vacante/${id}/candidato.json`, candidato);
  }
}