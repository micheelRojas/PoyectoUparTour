import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorEditComponent } from './conductor-edit.component';

describe('ConductorEditComponent', () => {
  let component: ConductorEditComponent;
  let fixture: ComponentFixture<ConductorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
