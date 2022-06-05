import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaBloqueadaComponent } from './tarjeta-bloqueada.component';

describe('TarjetaBloqueadaComponent', () => {
  let component: TarjetaBloqueadaComponent;
  let fixture: ComponentFixture<TarjetaBloqueadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaBloqueadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaBloqueadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
