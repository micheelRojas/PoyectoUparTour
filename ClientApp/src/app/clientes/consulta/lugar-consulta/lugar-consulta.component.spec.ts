import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarConsultaComponent } from './lugar-consulta.component';

describe('LugarConsultaComponent', () => {
  let component: LugarConsultaComponent;
  let fixture: ComponentFixture<LugarConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugarConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
