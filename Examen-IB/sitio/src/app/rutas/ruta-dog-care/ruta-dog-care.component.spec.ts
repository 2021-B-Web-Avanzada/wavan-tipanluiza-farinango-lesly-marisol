import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaDogCareComponent } from './ruta-dog-care.component';

describe('RutaDogCareComponent', () => {
  let component: RutaDogCareComponent;
  let fixture: ComponentFixture<RutaDogCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaDogCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaDogCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
