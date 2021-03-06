import { EntrevistaModule } from './entrevista.model';

export class CandidatoModule {
  id_candidato: string = "";
  nombre_candidato: string = "";
  apellido_candidato: string = "";
  correo_candidato: string = "";
  telefono_candidato: string = "";
  fecha_ingreso_candidato: string = "";
  observacion_candidato: string = "";
  estado_candidato: string = "";
  cedula_candidato: string = "";
  entrevista: EntrevistaModule[] = [];
  id_vacante: string = "";
 }
