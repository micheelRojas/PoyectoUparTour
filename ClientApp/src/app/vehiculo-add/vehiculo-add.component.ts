import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../services/vehiculo.service';
import { Vehiculo } from '../models/vehiculo';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-vehiculo-add',
  templateUrl: './vehiculo-add.component.html',
  styleUrls: ['./vehiculo-add.component.css']
})
export class VehiculoAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private vehiculoService: VehiculoService, private formBuilder: FormBuilder) { }
  vehiculo: Vehiculo;
  ngOnInit() {
    this.vehiculo={placa:'', modelo:'', marca:'', soat:'', tecnomecanica:'', capacidad:0};
    this.registerForm = this.formBuilder.group({
      placa: ['',[Validators.required,Validators.maxLength(14)]],
      modelo: ['',[Validators.required,Validators.maxLength(30)]],
      marca: ['',[Validators.required,Validators.maxLength(20)]],
      soat: ['',[Validators.required,Validators.maxLength(20)]],
      tecnomecanica: ['',[Validators.required,Validators.maxLength(30)]],
      capacidad: ['',[Validators.required]]
    });
  }
  
  add(){
    this.vehiculo= this.registerForm.value;
    this.vehiculoService.addVehiculo(this.vehiculo)
    .subscribe(vehiculo => {
      if(vehiculo!=null){
        alert('Se agregó un nuevo vehiculo');

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
