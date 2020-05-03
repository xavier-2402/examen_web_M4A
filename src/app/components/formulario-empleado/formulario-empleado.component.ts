import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-empleado',
  templateUrl: './formulario-empleado.component.html',
  styleUrls: ['./formulario-empleado.component.css']
})
export class FormularioEmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
    signupForm: FormGroup;

  constructor(private _builder: FormBuilder,private personaService:PersonaService) {
    this.signupForm = this._builder.group(  
      {
        cedula: ['',Validators.required],
        nombre: ['', Validators.required],
        apellido: ['',Validators.required ],
        correo: ['',Validators.required],
        celular: ['',Validators.required],
        contrasenia: ['',Validators.required],
        contraseniaconfirmacion: ['',Validators.required]
      }
    )
    this.signupForm .get('contraseniaconfirmacion').setValidators(
      CustomValidators.equals(this.signupForm.get('contrasenia'))
    );

  console.log("correcto")  
 XMLDocument}
 onSubmit(): void {
  const contrasenia = this.signupForm.get('contrasenia').value as string;
        
 
    console.log("correcto")  
   }
   get cedula() { return this.signupForm.get('cedula'); }
   get nombre() { return this.signupForm.get('nombre'); }
   get apellido() { return this.signupForm.get('apellido'); }
   get correo() { return this.signupForm.get('correo'); }
   get celular() { return this.signupForm.get('celular'); }
   get contrasenia() { return this.signupForm.get('contrasenia'); }
   get contraseniaconfirmacion() { return this.signupForm.get('contraseniaconfirmacion'); }

  ngOnInit(): void {  
    
  
    }
  giveImage(event){
    console.log(event);
  }


  enviar(values) {
    console.log(values);

    return values;

  }
  

postQuery() {
   
      this.personaService.getDate(this.signupForm.value.cedula,this.signupForm.value.nombre,
        this.signupForm.value.apellido,this.signupForm.value.correo,this.signupForm.value.celular,this.signupForm.value.contrasenia)
          this.personaService.getPersonas().subscribe((data:Persona)=>{
            console.log(data);  
          });
          console.log(this.signupForm.value.nombre);
      console.log("correcto");
      }
     
}*/
}
