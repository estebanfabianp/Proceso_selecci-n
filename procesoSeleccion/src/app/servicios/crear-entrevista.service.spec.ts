import { TestBed } from '@angular/core/testing';

import { CrearEntrevistaService } from './crear-entrevista.service';

describe('CrearEntrevistaService', () => {
  let service: CrearEntrevistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearEntrevistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
