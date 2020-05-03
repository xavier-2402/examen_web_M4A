import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoTarjetaComponent } from './cargo-tarjeta.component';

describe('CargoTarjetaComponent', () => {
  let component: CargoTarjetaComponent;
  let fixture: ComponentFixture<CargoTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
