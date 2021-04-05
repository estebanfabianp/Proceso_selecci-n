import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { VacanteComponent } from './componentes/vacante/vacante.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { CrearVacanteComponent } from './componentes/crear-vacante/crear-vacante.component';
import { CrearCandidatoComponent } from './componentes/crear-candidato/crear-candidato.component';
import { Entrevista1Component } from './componentes/entrevista1/entrevista1.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MostrarVacantesComponent } from './componentes/mostrar-vacantes/mostrar-vacantes.component';
import { MostrarCantidatosComponent } from './componentes/mostrar-cantidatos/mostrar-cantidatos.component';


@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    MenuComponent,
    VacanteComponent,
    UsuarioComponent,
    CrearVacanteComponent,
    CrearCandidatoComponent,
    Entrevista1Component,
    PrincipalComponent,
    MostrarVacantesComponent,
    MostrarCantidatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MostrarCantidatosComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
