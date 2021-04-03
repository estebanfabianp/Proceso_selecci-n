import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCantidatosComponent } from './mostrar-cantidatos.component';

describe('MostrarCantidatosComponent', () => {
  let component: MostrarCantidatosComponent;
  let fixture: ComponentFixture<MostrarCantidatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostrarCantidatosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarCantidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
