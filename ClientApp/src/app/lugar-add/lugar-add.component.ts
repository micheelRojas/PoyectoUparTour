import { Component, OnInit } from '@angular/core';
import { LugarService } from '../services/lugar.service';
import { Lugar } from '../models/lugar';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-lugar-add',
  templateUrl: './lugar-add.component.html',
  styleUrls: ['./lugar-add.component.css']
})
export class LugarAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private lugarService: LugarService, private formBuilder: FormBuilder) { }
  lugar: Lugar;

  ngOnInit() {
    //this.lugar={id:0, nombre:'', descripcion:''};
    this.registerForm = this.formBuilder.group({
     // id: ['',[Validators.required]],
      nombre: ['',[Validators.required,Validators.maxLength(30)]],
      descripcion: ['',[Validators.required]]
      
    });
  }
  
  add(){
    this.lugar= this.registerForm.value;
    this.lugarService.addLugar(this.lugar)
    .subscribe(lugar => {
      if(lugar!=null){
        alert('Se agregó un nuevo lugar');
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

