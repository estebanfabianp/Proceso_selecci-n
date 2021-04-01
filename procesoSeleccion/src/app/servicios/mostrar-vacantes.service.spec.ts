import { TestBed } from '@angular/core/testing';

import { MostrarVacantesService } from './mostrar-vacantes.service';

describe('MostrarVacantesService', () => {
  let service: MostrarVacantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarVacantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
