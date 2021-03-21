import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entrevista1Component } from './entrevista1.component';

describe('Entrevista1Component', () => {
  let component: Entrevista1Component;
  let fixture: ComponentFixture<Entrevista1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Entrevista1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Entrevista1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
