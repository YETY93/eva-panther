import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualidadComponent } from './actualidad.component';

describe('ActualidadComponent', () => {
  let component: ActualidadComponent;
  let fixture: ComponentFixture<ActualidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
