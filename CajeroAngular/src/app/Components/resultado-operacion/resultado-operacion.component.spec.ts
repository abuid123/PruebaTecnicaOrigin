import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoOperacionComponent } from './resultado-operacion.component';

describe('ResultadoOperacionComponent', () => {
  let component: ResultadoOperacionComponent;
  let fixture: ComponentFixture<ResultadoOperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoOperacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
