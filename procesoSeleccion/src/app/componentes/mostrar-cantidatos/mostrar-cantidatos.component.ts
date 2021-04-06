import { Component, Input, OnInit } from '@angular/core';
import { CandidatoModule } from '../../modelos/candidato.model';
import { MostrarCandidatosService } from '../../servicios/mostrar-candidatos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-cantidatos',
  templateUrl: './mostrar-cantidatos.component.html',
  styleUrls: ['./mostrar-cantidatos.component.css'],
})
export class MostrarCantidatosComponent implements OnInit {

  constructor(private mostrar: MostrarCandidatosService, private router: ActivatedRoute) {}
  id: any;
  candidatos: CandidatoModule[] = [];

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('parametro');
    this.mostrar.mostrarCandidatos(this.id).subscribe((resp) => {
      this.candidatos = resp;
      console.log(this.candidatos);
    });
  }
}
