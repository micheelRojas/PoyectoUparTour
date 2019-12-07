import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../services/conductor.service';
import { Conductor } from '../models/conductor';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-conductor-add',
  templateUrl: './conductor-add.component.html',
  styleUrls: ['./conductor-add.component.css']
})
export class ConductorAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private conductorService: ConductorService, private formBuilder: FormBuilder) { }
  conductor: Conductor;
  ngOnInit() {
    this.conductor={identificacion:'', nombre:'', apellidos:'', correo:'', telefono:0, licencia:''};
    this.registerForm = this.formBuilder.group({
      identificacion: ['',[Validators.required,Validators.maxLength(14)]],
      nombre: ['',[Validators.required,Validators.maxLength(30)]],
      apellidos: ['',[Validators.required,Validators.maxLength(40)]],
      correo: ['',[Validators.required,Validators.maxLength(25),Validators.email]],
      telefono: ['',[Validators.required,Validators.maxLength(14)]], 
      licencia: ['',[Validators.required,Validators.maxLength(14)]] 
    });
  }
  
  add(){
    this.conductor= this.registerForm.value;
    this.conductorService.addConductor(this.conductor)
    .subscribe(conductor => {
      if(conductor!=null){
        alert('Se agregó un nuevo conductor');
        //this.reserva.recibir(this.cliente.identificacion);
      }else{
        //alert('No se pudo llevar a cabo el registro.');
        
      }
    });

  }
  get f() { return this.registerForm.controls; }

  onSubmit(){
      this.submitted = true;
      if(this.registerForm.invalid){
        return;
      }
    this.add();
  }
  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }
}
