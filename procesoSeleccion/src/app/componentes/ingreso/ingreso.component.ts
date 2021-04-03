import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IngresarModule } from '../../modelos/ingresar.model';
import { IngresarService } from '../../servicios/ingresar.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  usuario: IngresarModule = new IngresarModule();
  constructor(private ingresar: IngresarService, private router: Router) {}

  ngOnInit(): void {}

  enviarInformacion(formulario: NgForm) {
    if (formulario.invalid) {
      return;
    } else {
      this.ingresar.ingresarUsuario(this.usuario).subscribe(
        (respuesta) => {
          alert('Bienvenido');
          this.router.navigateByUrl('/principal');
        },
        (err) => {
          alert(err.error.error.message);
        }
      );
    }
  }
}
