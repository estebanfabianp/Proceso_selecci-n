import { TestBed } from '@angular/core/testing';

import { CrearCandidatoService } from './crear-candidato.service';

describe('CrearCandidatoService', () => {
  let service: CrearCandidatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearCandidatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
