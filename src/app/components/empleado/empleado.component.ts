import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../servicios/empleado.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  
})
export class EmpleadoComponent implements OnInit {

  empleado:any={};

  constructor(private activatedRoute: ActivatedRoute,
   private empleadoService:EmpleadoService) { 

    this.activatedRoute.params.subscribe(
      params=>{
        console.log(params['id']);
        this.empleado = this.empleadoService.getEmpleadoById(params['id'])
      }
    )
   }

  ngOnInit(): void {
  }

}
