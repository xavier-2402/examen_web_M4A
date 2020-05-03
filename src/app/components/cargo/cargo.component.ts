import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CargoService } from '../../servicios/cargo.service';


@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  cargo:any={};
  constructor(private activatedRoute: ActivatedRoute,
    private cargoService:CargoService) { 
      this.activatedRoute.params.subscribe(
        params=>{
          console.log(params['id']);
          this.cargo = this.cargoService.getCargoById(params['id'])
        }
      )
    }

  ngOnInit(): void {
  }

}
