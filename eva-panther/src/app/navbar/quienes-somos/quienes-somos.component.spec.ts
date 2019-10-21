import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesSomosComponent } from './quienes-somos.component';

describe('QuinesSomosComponent', () => {
  let component: QuienesSomosComponent;
  let fixture: ComponentFixture<QuienesSomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuienesSomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienesSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
