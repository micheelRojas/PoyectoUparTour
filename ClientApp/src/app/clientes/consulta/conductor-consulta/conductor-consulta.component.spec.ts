import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorConsultaComponent } from './conductor-consulta.component';

describe('ConductorConsultaComponent', () => {
  let component: ConductorConsultaComponent;
  let fixture: ComponentFixture<ConductorConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
