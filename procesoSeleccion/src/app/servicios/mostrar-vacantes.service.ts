import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MostrarVacantesService {

  constructor(private http: HttpClient){ }

  private url = 'https://procesoseleccion-724a7-default-rtdb.firebaseio.com';

  mostrarVacantes(){
    return this.http.get(`${this.url}/vacante.json`)
    .pipe(
      map(resp => this.CrearArreglo(resp))
    );
  }

  private CrearArreglo(vacanteObj: any){
    
    const vacante = Object.keys(vacanteObj).map(key =>{
      return {
          ...vacanteObj[key],
          id_vancate: key
        }
    });
    console.log(vacante);
    return vacante;
  }
}
