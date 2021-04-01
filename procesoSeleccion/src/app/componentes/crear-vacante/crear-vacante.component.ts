import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VacanteModule } from '../../modelos/vacante.model';
import { CrearVacanteService } from '../../servicios/crear-vacante.service';

@Component({
  selector: 'app-crear-vacante',
  templateUrl: './crear-vacante.component.html',
  styleUrls: ['./crear-vacante.component.css']
})
export class CrearVacanteComponent implements OnInit {

  constructor(private crear: CrearVacanteService, private router: Router) { }

  vacante: VacanteModule = new VacanteModule();

  ngOnInit(): void {
  }

  crearVacante(form: NgForm){
    if (form.invalid) {
      return;
    } else {
      console.log(form);
      console.log(this.vacante);
      this.crear.crearVacantes(this.vacante).subscribe(
        (res) => {
          alert('Registro exitoso');
          this.router.navigateByUrl('/mostrarVacantes');
        },
        (err) => {
          alert(err.error.error.message);
        }
      );
    }
  }
}
