import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorListComponent } from './conductor-list.component';

describe('ConductorListComponent', () => {
  let component: ConductorListComponent;
  let fixture: ComponentFixture<ConductorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
