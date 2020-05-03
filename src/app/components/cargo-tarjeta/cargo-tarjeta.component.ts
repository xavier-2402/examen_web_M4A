import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargo-tarjeta',
  templateUrl: './cargo-tarjeta.component.html',
  styles: []
})
export class CargoTarjetaComponent implements OnInit {
  @Input() cargo:any={};
  @Input() indice:number;

  @Output() cargoSeleccionado:EventEmitter<number>;

  constructor(private router:Router) {
    this.cargoSeleccionado= new EventEmitter();
   }

  ngOnInit(): void {
  }

  verCargo(){
    console.log(this.indice)
    this.router.navigate(['/cargo',this.indice])
  }

}
