import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCotizacionUsuarioComponent } from './listar-cotizacion-usuario.component';

describe('ListarCotizacionUsuarioComponent', () => {
  let component: ListarCotizacionUsuarioComponent;
  let fixture: ComponentFixture<ListarCotizacionUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCotizacionUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCotizacionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
