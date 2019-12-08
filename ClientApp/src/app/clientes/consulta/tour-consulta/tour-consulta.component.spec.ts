import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourConsultaComponent } from './tour-consulta.component';

describe('TourConsultaComponent', () => {
  let component: TourConsultaComponent;
  let fixture: ComponentFixture<TourConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
