import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNuevoArtistaComponent } from './ruta-nuevo-artista.component';

describe('RutaNuevoArtistaComponent', () => {
  let component: RutaNuevoArtistaComponent;
  let fixture: ComponentFixture<RutaNuevoArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaNuevoArtistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNuevoArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
