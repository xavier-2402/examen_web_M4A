import {RouterModule, Routes} from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { FormularioCargoComponent } from './components/formulario-cargo/formulario-cargo.component';
import { FormularioEmpleadoComponent } from './components/formulario-empleado/formulario-empleado.component';
import { CargoComponent } from './components/cargo/cargo.component';
import { CargosComponent } from './components/cargos/cargos.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';


const ROUTES: Routes = [
    { path: 'home', component: BodyComponent },
    { path: 'formulario-empleado', component: FormularioEmpleadoComponent},
    { path: 'formulario-cargo', component: FormularioCargoComponent},
    { path: 'empleados',component:EmpleadosComponent},
    { path: 'empleado/:id',component:EmpleadoComponent},
    { path: 'cargos',component:CargosComponent},
    { path: 'cargo/id',component:CargoComponent},
    
  
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);