import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarAddComponent } from './lugar-add.component';

describe('LugarAddComponent', () => {
  let component: LugarAddComponent;
  let fixture: ComponentFixture<LugarAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugarAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
