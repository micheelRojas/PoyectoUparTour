import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaConsultaComponent } from './guia-consulta.component';

describe('GuiaConsultaComponent', () => {
  let component: GuiaConsultaComponent;
  let fixture: ComponentFixture<GuiaConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiaConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
