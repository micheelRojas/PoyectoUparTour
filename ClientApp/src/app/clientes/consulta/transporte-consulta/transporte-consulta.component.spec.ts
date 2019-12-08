import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteConsultaComponent } from './transporte-consulta.component';

describe('TransporteConsultaComponent', () => {
  let component: TransporteConsultaComponent;
  let fixture: ComponentFixture<TransporteConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransporteConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporteConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
