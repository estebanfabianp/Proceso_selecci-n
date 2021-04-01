import { CandidatoModule } from './candidato.model';

export class VacanteModule {
  id_vancate: string = "";
  solicitante: string = "";
  cargo_solicitado: string = "";
  telefono_solicitante: string = "";
  fecha_solicitud: string = "";
  observacion_solicitud: string = "";
  estado_solicitud: string = "";
  cantidad_vacante: number = 0;
  candidato: CandidatoModule[] = [];
 }
