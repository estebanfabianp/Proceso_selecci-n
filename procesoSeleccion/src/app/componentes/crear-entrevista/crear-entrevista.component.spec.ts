import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEntrevistaComponent } from './crear-entrevista.component';

describe('CrearEntrevistaComponent', () => {
  let component: CrearEntrevistaComponent;
  let fixture: ComponentFixture<CrearEntrevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEntrevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
