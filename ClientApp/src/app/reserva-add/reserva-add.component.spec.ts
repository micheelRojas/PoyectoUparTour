import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaAddComponent } from './reserva-add.component';

describe('ReservaAddComponent', () => {
  let component: ReservaAddComponent;
  let fixture: ComponentFixture<ReservaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
