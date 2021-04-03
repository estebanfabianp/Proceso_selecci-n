import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IngresarModule } from '../modelos/ingresar.model';

@Injectable({
  providedIn: 'root'
})
export class IngresarService {

  private apiKey = 'AIzaSyCNMakGUPkAjD4PO_oVMV6KZH6wexsmrvs';
  private usuarioToken: string = "";

  constructor(private http: HttpClient) { }

  ingresarUsuario(usuario: IngresarModule){
    const informacionUsuario = {
      email: usuario.correo_ingreso,
      password: usuario.contrasena_ingreso,
      returnSecureToken: true,
    };
    console.log(usuario);
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
        informacionUsuario
      )
      .pipe(
        map((res:any) => {
          console.log("RXJS");
          this.guardarToken(res['idToken']);
          return res;
        })
      )
    }     
    private guardarToken(idToken: string) {
      this.usuarioToken = idToken;
      localStorage.setItem('token', this.usuarioToken);
    }
}
