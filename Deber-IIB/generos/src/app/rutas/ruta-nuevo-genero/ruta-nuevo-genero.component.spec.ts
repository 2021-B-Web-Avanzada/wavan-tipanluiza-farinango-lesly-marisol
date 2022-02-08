import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNuevoGeneroComponent } from './ruta-nuevo-genero.component';

describe('RutaNuevoGeneroComponent', () => {
  let component: RutaNuevoGeneroComponent;
  let fixture: ComponentFixture<RutaNuevoGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaNuevoGeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNuevoGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
