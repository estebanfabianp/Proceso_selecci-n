import { Component, OnInit } from '@angular/core';
import { VacanteModule } from '../../modelos/vacante.model';
import { Router } from '@angular/router';
import { MostrarVacantesService } from '../../servicios/mostrar-vacantes.service';

@Component({
  selector: 'app-mostrar-vacantes',
  templateUrl: './mostrar-vacantes.component.html',
  styleUrls: ['./mostrar-vacantes.component.css']
})
export class MostrarVacantesComponent implements OnInit {

  constructor(private mostrar: MostrarVacantesService, private router: Router) {}

  vacantes: VacanteModule[] = [];

  selecVacantes = new VacanteModule();

  ngOnInit() {
    this.mostrar.mostrarVacantes()
    .subscribe(resp => {
      this.vacantes = resp;
    });
  }

  onSelect(vacantes: VacanteModule){
    this.selecVacantes = vacantes;
  }


}
