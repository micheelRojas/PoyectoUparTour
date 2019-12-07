import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../services/restaurante.service';
import { Restaurante } from '../models/restaurante';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-restaurante-add',
  templateUrl: './restaurante-add.component.html',
  styleUrls: ['./restaurante-add.component.css']
})
export class RestauranteAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private restauranteService: RestauranteService, private formBuilder: FormBuilder) { }
  restaurante: Restaurante;
  ngOnInit() {
    this.restaurante={id:0,nombre:'', direccion:'', telefono:0, precio:0, descuento:0};
    this.registerForm = this.formBuilder.group({
      
      nombre: ['',[Validators.required,Validators.maxLength(30)]],
      direccion: ['',[Validators.required,Validators.maxLength(30)]],
      telefono: ['',[Validators.required,Validators.maxLength(14)]],
      precio: ['',[Validators.required]],
      descuento: ['',[Validators.required]]
    });
  }
  
  add(){
    this.restaurante= this.registerForm.value;
    this.restauranteService.addRestaurante(this.restaurante)
    .subscribe(restaurante => {
      if(restaurante!=null){
        alert('Se agregó un nuevo restaurante');
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


