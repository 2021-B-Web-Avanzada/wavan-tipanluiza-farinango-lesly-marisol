import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaGenerosComponent } from './ruta-lista-generos.component';

describe('RutaListaGenerosComponent', () => {
  let component: RutaListaGenerosComponent;
  let fixture: ComponentFixture<RutaListaGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListaGenerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
