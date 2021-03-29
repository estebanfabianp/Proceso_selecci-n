import { TestBed } from '@angular/core/testing';

import { CrearVacanteService } from './crear-vacante.service';

describe('CrearVacanteService', () => {
  let service: CrearVacanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearVacanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
