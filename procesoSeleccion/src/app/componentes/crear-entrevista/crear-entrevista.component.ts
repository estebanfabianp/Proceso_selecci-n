import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EntrevistaModule } from '../../modelos/entrevista.model';
import { CrearEntrevistaService } from '../../servicios/crear-entrevista.service';

@Component({
  selector: 'app-crear-entrevista',
  templateUrl: './crear-entrevista.component.html',
  styleUrls: ['./crear-entrevista.component.css'],
})
export class CrearEntrevistaComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
    private crear: CrearEntrevistaService,
    private routerr: Router
  ) {}

  entrevista: EntrevistaModule = new EntrevistaModule();
  id_candidato: any;
  id_vacante: any;

  ngOnInit(): void {
    this.id_candidato = this.router.snapshot.paramMap.get('parametro');
    this.id_vacante = this.router.snapshot.paramMap.get('parametro2');
  }

  crearEntrevista(form: NgForm) {
    if (form.invalid) {
      return;
    }else {
      this.crear.crearEntrevista(this.entrevista, this.id_candidato, this.id_vacante).subscribe(
        (res) => {
          alert('Registro exitoso');
          this.routerr.navigateByUrl('/mostrarVacantes');
        },
        (err) => {
          alert(err.error.error.message);
        }
      );
    }
  }
}
