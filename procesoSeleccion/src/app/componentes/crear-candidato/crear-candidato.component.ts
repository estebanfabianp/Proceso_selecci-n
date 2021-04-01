import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CandidatoModule } from '../../modelos/candidato.model';
import { CrearCandidatoService } from '../../servicios/crear-candidato.service';

@Component({
  selector: 'app-crear-candidato',
  templateUrl: './crear-candidato.component.html',
  styleUrls: ['./crear-candidato.component.css']
})
export class CrearCandidatoComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute, private crear: CrearCandidatoService){ }

  candidato: CandidatoModule = new CandidatoModule();
  id: any;

  ngOnInit(): void {
     this.id = this.router.snapshot.paramMap.get('parametro');
  }

  crearCantidato(form: NgForm){
    if (form.invalid) {
      return;
    } else {
      this.crear.crearCandidatos(this.candidato, this.id).subscribe(
        (res) => {
          alert('Registro exitoso');
        },
        (err) => {
          alert(err.error.error.message);
        }
      );
    }
  }
}
