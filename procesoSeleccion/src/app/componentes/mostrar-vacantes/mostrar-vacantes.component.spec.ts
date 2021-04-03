import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarVacantesComponent } from './mostrar-vacantes.component';

describe('MostrarVacantesComponent', () => {
  let component: MostrarVacantesComponent;
  let fixture: ComponentFixture<MostrarVacantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostrarVacantesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarVacantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
