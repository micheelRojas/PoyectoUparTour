import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelConsultaComponent } from './hotel-consulta.component';

describe('HotelConsultaComponent', () => {
  let component: HotelConsultaComponent;
  let fixture: ComponentFixture<HotelConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
