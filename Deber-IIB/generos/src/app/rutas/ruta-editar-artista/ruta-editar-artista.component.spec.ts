import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarArtistaComponent } from './ruta-editar-artista.component';

describe('RutaEditarArtistaComponent', () => {
  let component: RutaEditarArtistaComponent;
  let fixture: ComponentFixture<RutaEditarArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEditarArtistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
