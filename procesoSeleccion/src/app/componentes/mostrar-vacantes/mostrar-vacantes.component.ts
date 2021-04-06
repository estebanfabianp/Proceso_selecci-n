import { Component, OnInit } from '@angular/core';
import { VacanteModule } from '../../modelos/vacante.model';
import { MostrarVacantesService } from '../../servicios/mostrar-vacantes.service';

@Component({
  selector: 'app-mostrar-vacantes',
  templateUrl: './mostrar-vacantes.component.html',
  styleUrls: ['./mostrar-vacantes.component.css'],
})
export class MostrarVacantesComponent implements OnInit {
  constructor(
    private mostrar: MostrarVacantesService,
  ) {}

  vacantes: VacanteModule[] = [];
  selecVacantes = new VacanteModule();
  
  ngOnInit() {
    this.mostrar.mostrarVacantes().subscribe((resp) => {
      this.vacantes = resp;
    });
  }
}
