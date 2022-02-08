import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaArtistasComponent } from './ruta-lista-artistas.component';

describe('RutaListaArtistasComponent', () => {
  let component: RutaListaArtistasComponent;
  let fixture: ComponentFixture<RutaListaArtistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListaArtistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaArtistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
