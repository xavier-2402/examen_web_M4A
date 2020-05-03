import { HttpClient } from '@angular/common/http'
import { Observable,of} from 'rxjs'
import { map,catchError, tap} from 'rxjs/operators'
import { Injectable } from '@angular/core';


@Injectable({
    providedIn:'root'
})

export class CargoService{
    baseURL=' http://localhost:9898/cargo'
    constructor(private http:HttpClient){

    }

    getQuery(query:string){
        const url =` http://localhost:9898/${query}`;
        console.log(url);
        return this.http.get(url);

    }
   


    getCargos():Observable<any>{
        const url='cargo';
        return this.getQuery(url);

    }
    getCargoById(id:string)
    {
        const url='cargo';
      return this.getQuery(url);
    }

    createCargo(cargo: Cargo): Observable<Cargo>{
        return this.http.post<Cargo>(this.baseURL, cargo);
      }
}




export interface Cargo {
  
   car_nombre:string;
   car_descripcion:string;
   car_salario:number;
 
   
     
}