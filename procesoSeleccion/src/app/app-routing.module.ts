import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCandidatoComponent } from './componentes/crear-candidato/crear-candidato.component';
import { CrearVacanteComponent } from './componentes/crear-vacante/crear-vacante.component';
import { Entrevista1Component } from './componentes/entrevista1/entrevista1.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { MostrarVacantesComponent } from './componentes/mostrar-vacantes/mostrar-vacantes.component';
import { MostrarCantidatosComponent } from './componentes/mostrar-cantidatos/mostrar-cantidatos.component';
import { CrearEntrevistaComponent } from './componentes/crear-entrevista/crear-entrevista.component';
const routes: Routes = [
  { path: 'candidato/:parametro', component: CrearCandidatoComponent },
  { path: 'vacante', component: CrearVacanteComponent },
  { path: 'entrevista/:parametro/:parametro2', component: Entrevista1Component },
  { path: 'ingreso', component: IngresoComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'mostrarVacantes', component: MostrarVacantesComponent },
  { path: 'crearEntrevista/:parametro/:parametro2', component:  CrearEntrevistaComponent},
  { path: 'mostrarCandidatos/:parametro', component: MostrarCantidatosComponent },
  { path: '**', redirectTo: 'ingreso' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
