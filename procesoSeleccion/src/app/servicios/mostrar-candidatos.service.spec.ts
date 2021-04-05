import { TestBed } from '@angular/core/testing';

import { MostrarCandidatosService } from './mostrar-candidatos.service';

describe('MostrarCandidatosService', () => {
  let service: MostrarCandidatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarCandidatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
