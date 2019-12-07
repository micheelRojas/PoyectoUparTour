import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';
import {ReservaAddComponent} from '../reserva-add/reserva-add.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private clienteService: ClienteService, private formBuilder: FormBuilder) { }
  cliente: Cliente;
  reserva: ReservaAddComponent;
  ngOnInit() {
    this.cliente={identificacion:'', nombre:'', apellidos:'', correo:'', contrasena:'', direccion:'', telefono:0};
    this.registerForm = this.formBuilder.group({
      identificacion: ['',[Validators.required,Validators.maxLength(14)]],
      nombre: ['',[Validators.required,Validators.maxLength(30)]],
      apellidos: ['',[Validators.required,Validators.maxLength(40)]],
      correo: ['',[Validators.required,Validators.maxLength(25),Validators.email]],
      contrasena: ['',[Validators.required,Validators.maxLength(20)]],
      direccion: ['',[Validators.required,Validators.maxLength(40)]],
      telefono: ['',[Validators.required,Validators.maxLength(14)]] 
    });
  }
  
  add(){
    this.cliente= this.registerForm.value;
    this.clienteService.addCliente(this.cliente)
    .subscribe(cliente => {
      if(cliente!=null){
        alert('Se agregó un nuevo cliente');
        (<HTMLInputElement> document.getElementById("Siguiente")).disabled = false;
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
