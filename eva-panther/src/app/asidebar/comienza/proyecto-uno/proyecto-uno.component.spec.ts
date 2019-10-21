import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoUnoComponent } from './proyecto-uno.component';

describe('ProyectoUnoComponent', () => {
  let component: ProyectoUnoComponent;
  let fixture: ComponentFixture<ProyectoUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
