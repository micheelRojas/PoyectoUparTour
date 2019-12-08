import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoConsultaComponent } from './vehiculo-consulta.component';

describe('VehiculoConsultaComponent', () => {
  let component: VehiculoConsultaComponent;
  let fixture: ComponentFixture<VehiculoConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
