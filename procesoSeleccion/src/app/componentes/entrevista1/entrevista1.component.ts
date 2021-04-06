import { Component, OnInit } from '@angular/core';
import { EntrevistaModule } from '../../modelos/entrevista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrevista1',
  templateUrl: './entrevista1.component.html',
  styleUrls: ['./entrevista1.component.css']
})
export class Entrevista1Component implements OnInit {

  constructor(    private mostrar: EntrevistaModule,
    private router: Router) { }

  ngOnInit(): void {
  }

}


/*


import { MostrarVacantesService } from '../../servicios/mostrar-vacantes.service';

@Component({
  selector: 'app-mostrar-vacantes',
  templateUrl: './mostrar-vacantes.component.html',
  styleUrls: ['./mostrar-vacantes.component.css'],
})
export class MostrarVacantesComponent implements OnInit {
  constructor(

  ) {}

  
  

  selecVacantes = new VacanteModule();

  ngOnInit() {
    this.mostrar.mostrarVacantes().subscribe((resp) => {
      this.vacantes = resp;
    });
  }

  onSelect(vacantes: VacanteModule) {
    this.selecVacantes = vacantes;
  }
}
*/