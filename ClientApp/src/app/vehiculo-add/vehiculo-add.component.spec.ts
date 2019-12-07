import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoAddComponent } from './vehiculo-add.component';

describe('VehiculoAddComponent', () => {
  let component: VehiculoAddComponent;
  let fixture: ComponentFixture<VehiculoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
