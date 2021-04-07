import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MostrarEntrevistaService {

  constructor(private http: HttpClient) {}
  private url = 'https://procesoseleccion-724a7-default-rtdb.firebaseio.com';

  mostrarEntrevistas(id_candidato: string, id_vacante: string) {
    return this.http
      .get(`${this.url}/vacante/${id_vacante}/candidato/${id_candidato}/entrevista.json`)
      .pipe(map((resp) => this.CrearArreglo(resp)));
  }

  private CrearArreglo(entrevistaObj: any) {
    if (entrevistaObj != null) {
      const entrevista = Object.keys(entrevistaObj).map((key) => {
        return {
          ...entrevistaObj[key],
        };
      });

      return entrevista;
    }
    return entrevistaObj;
  }
}
