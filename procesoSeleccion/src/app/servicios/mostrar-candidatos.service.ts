import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MostrarCandidatosService {
  constructor(private http: HttpClient) {}

  private url = 'https://procesoseleccion-724a7-default-rtdb.firebaseio.com';

  mostrarCandidatos(id: string) {
    return this.http.get(`${this.url}/vacante/${id}/candidato.json`)
    .pipe(
      map(resp => this.CrearArreglo(resp))
    );
  }

  private CrearArreglo(candidatoObj: any) {
    if (candidatoObj != null){
    const candidato = Object.keys(candidatoObj).map((key) => {
      return {
        ...candidatoObj[key],
        id_candidato: key,
      };
    });
  
    return candidato;
  }
  return candidatoObj;
}
}
