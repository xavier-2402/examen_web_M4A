import { HttpClient } from '@angular/common/http'
import { Observable,of} from 'rxjs'
import { map,catchError, tap} from 'rxjs/operators'
import { Injectable } from '@angular/core';


@Injectable({
    providedIn:'root'
})

export class EmpleadoService{
    baseURL=' http://localhost:9898/empleado'
    constructor(private http:HttpClient){

    }

    getQuery(query:string){
        const url =` http://localhost:9898/${query}`;
        console.log(url);
        return this.http.get(url);

    }
   


    getEmpleados():Observable<any>{
        const url='empleado';
        return this.getQuery(url);

    }
    getEmpleadoById(id:string)
    {
        const url='empleado';
      return this.getQuery(url);
    }
/*
 getDate(cedulaget:string,nombreget:string,apellidoget:string,telefonoget:string,correoget:string,contraseniaget:string){
        this.cedulain=cedulaget;
        this.nombrein = nombreget;
        this.apellidoin=apellidoget;
        this.telefonoin=telefonoget;
        this.correoin=correoget;
       // this.direccionin=direccionget;
        this.contraseniain=contraseniaget;
        
       
    }
    postQuery(query: string) {
        const url = `http://localhost:9898/${query}`;
        console.log(url)

        let body = {
          cedula:this.cedulain,
          nombre:this.nombrein,
          apellido:this.apellidoin,
          telefono:this.telefonoin,
          correo:this.correoin,
          contrasenia:this.contraseniain


        }
        let json = JSON.stringify(body);
        let params = json;
        let headers = new HttpHeaders().set('Content-Type','application/json ');
        console.log("body");
        console.log(params);
        return this.http.post(url, params, {headers: headers});

    }
    getPersonas(): Observable<any> {
        const url = 'persona';
       
        return this.postQuery(url);
    }
    */
}




export interface Empleado {
   emp_cedula:string;
   emp_nombre:string;
   emp_apellido:string;
   emp_correo:string;
   emp_celular:string;
   emp_telefono?:string;
   emp_imagen:string;
     
}
