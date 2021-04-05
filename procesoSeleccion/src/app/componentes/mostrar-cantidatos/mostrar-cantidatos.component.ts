import { Component, Input, OnInit } from '@angular/core';
import { CandidatoModule } from '../../modelos/candidato.model';
import { MostrarCandidatosService } from '../../servicios/mostrar-candidatos.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-mostrar-cantidatos',
  templateUrl: './mostrar-cantidatos.component.html',
  styleUrls: ['./mostrar-cantidatos.component.css'],
})
export class MostrarCantidatosComponent implements OnInit {

  constructor(private mostrar: MostrarCandidatosService,  private cdRef: ChangeDetectorRef) {}

  candidatos: CandidatoModule[] = [];

  ngOnInit(): void {
    console.log('candidato: ' , this.candidatos);
    this.cdRef.detectChanges();
  }

  mostrarCandidato(id: string){
    this.mostrar.mostrarCandidatos(id).subscribe((resp) => {
      this.candidatos = resp;
    });
  }
}
