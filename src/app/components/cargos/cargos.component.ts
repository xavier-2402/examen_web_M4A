import { Component, OnInit } from '@angular/core';
import { CargoService, Cargo } from '../../servicios/cargo.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  cargos:any={};
  constructor(private cargoService:CargoService) {

   }

   getCargos(){
    this.cargoService.getCargos().subscribe((data:{Cargo})=>{
      console.log(data);
      this.cargos=data;

    })
  }


  ngOnInit(): void {
  }

}
