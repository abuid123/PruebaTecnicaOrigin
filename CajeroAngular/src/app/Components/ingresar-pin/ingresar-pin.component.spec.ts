import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPinComponent } from './ingresar-pin.component';

describe('IngresarPinComponent', () => {
  let component: IngresarPinComponent;
  let fixture: ComponentFixture<IngresarPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarPinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
