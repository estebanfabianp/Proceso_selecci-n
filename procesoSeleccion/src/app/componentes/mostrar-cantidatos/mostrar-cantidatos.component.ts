import { Component, Input, OnInit } from '@angular/core';
import { VacanteModule } from '../../modelos/vacante.model';

@Component({
  selector: 'app-mostrar-cantidatos',
  templateUrl: './mostrar-cantidatos.component.html',
  styleUrls: ['./mostrar-cantidatos.component.css'],
})
export class MostrarCantidatosComponent implements OnInit {
  @Input() canditado?: VacanteModule;

  constructor() {}

  ngOnInit(): void {}
}
