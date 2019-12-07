import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-hotel-add',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.css']
})
export class HotelAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private hotelService: HotelService, private formBuilder: FormBuilder) { }
  hotel: Hotel;
  ngOnInit() {
    this.hotel={id:0,nombre:'', direccion:'', telefono:0, precio:0, descuento:0};
    this.registerForm = this.formBuilder.group({
      
      nombre: ['',[Validators.required,Validators.maxLength(30)]],
      direccion: ['',[Validators.required,Validators.maxLength(30)]],
      telefono: ['',[Validators.required,Validators.maxLength(14)]],
      precio: ['',[Validators.required]],
      descuento: ['',[Validators.required]]
    });
  }
  
  add(){
    this.hotel= this.registerForm.value;
    this.hotelService.addHotel(this.hotel)
    .subscribe(hotel => {
      if(hotel!=null){
        alert('Se agregó un nuevo hotel');
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

