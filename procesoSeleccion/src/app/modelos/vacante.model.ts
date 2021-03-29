import { CandidatoModule } from './candidato.model';

export class VacanteModule {
  nombre_solicitante: string = "";
  apellido_solicitante: string = "";
  cargo_solicitante: string = "";
  correo_solicitante: string = "";
  telefono_solicitante: string = "";
  fecha_solicitud: string = "";
  observacion_solicitud: string = "";
  estado_solicitud: string = "";
  candidato: CandidatoModule[] = [];
 }
