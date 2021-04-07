import { TestBed } from '@angular/core/testing';

import { MostrarEntrevistaService } from './mostrar-entrevista.service';

describe('MostrarEntrevistaService', () => {
  let service: MostrarEntrevistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarEntrevistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
