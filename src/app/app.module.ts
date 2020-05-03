import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadoTarjetaComponent } from './components/empleado-tarjeta/empleado-tarjeta.component';
import { CargoComponent } from './components/cargo/cargo.component';
import { CargosComponent } from './components/cargos/cargos.component';
import { CargoTarjetaComponent } from './components/cargo-tarjeta/cargo-tarjeta.component';
import { FormularioEmpleadoComponent } from './components/formulario-empleado/formulario-empleado.component';
import { FormularioCargoComponent } from './components/formulario-cargo/formulario-cargo.component';
import { APPROUTING } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoService } from './servicios/empleado.service';
import { CargoService } from './servicios/cargo.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    EmpleadoComponent,
    EmpleadosComponent,
    EmpleadoTarjetaComponent,
    CargoComponent,
    CargosComponent,
    CargoTarjetaComponent,
    FormularioEmpleadoComponent,
    FormularioCargoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APPROUTING,
  ],
  providers: [
    EmpleadoService,
    CargoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
