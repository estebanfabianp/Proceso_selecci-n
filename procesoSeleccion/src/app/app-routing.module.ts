import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCandidatoComponent } from './componentes/crear-candidato/crear-candidato.component';
import { CrearVacanteComponent } from './componentes/crear-vacante/crear-vacante.component';
import { Entrevista1Component } from './componentes/entrevista1/entrevista1.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';

const routes: Routes = [
  {path: "candidato", component: CrearCandidatoComponent},
  {path: "vacante", component: CrearVacanteComponent},
  {path: "entrevista", component: Entrevista1Component},
  {path: "ingreso", component: IngresoComponent},
  {path: "usuario", component: UsuarioComponent},
  {path: "**", redirectTo: "ingreso"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
