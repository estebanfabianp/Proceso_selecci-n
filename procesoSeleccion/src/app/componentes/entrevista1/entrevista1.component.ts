import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EntrevistaModule } from '../../modelos/entrevista.model';
import { MostrarEntrevistaService } from '../../servicios/mostrar-entrevista.service';

@Component({
  selector: 'app-entrevista1',
  templateUrl: './entrevista1.component.html',
  styleUrls: ['./entrevista1.component.css']
})
export class Entrevista1Component implements OnInit {

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
    private mostrar: MostrarEntrevistaService,
    private routerr: Router
  ) { }

  entrevistas: EntrevistaModule[] = [];
  id_candidato: any;
  id_vacante: any;

  ngOnInit(): void {
    this.id_candidato = this.router.snapshot.paramMap.get('parametro');
    this.id_vacante = this.router.snapshot.paramMap.get('parametro2');
    this.mostrar.mostrarEntrevistas(this.id_candidato, this.id_vacante).subscribe((resp) => {
      this.entrevistas = resp;
      if (resp == null){
        alert('Este candidato no tiene una entrevista asociada');
       }
    });
  }
}
