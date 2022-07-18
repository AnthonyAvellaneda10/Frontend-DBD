import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionreclamoComponent } from './gestionreclamo.component';

describe('GestionreclamoComponent', () => {
  let component: GestionreclamoComponent;
  let fixture: ComponentFixture<GestionreclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionreclamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionreclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
