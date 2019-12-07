import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaEditComponent } from './reserva-edit.component';

describe('ReservaEditComponent', () => {
  let component: ReservaEditComponent;
  let fixture: ComponentFixture<ReservaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
