import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../services/vehiculo.service';
import { Vehiculo } from '../models/vehiculo';
//import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {
  vehiculos:Vehiculo[];
  constructor(private vehiculoService:VehiculoService) { }

  ngOnInit() {
    this.getAll();
  }
  
  getAll(){
    this.vehiculoService.getAll().subscribe(vehiculos=>this.vehiculos=vehiculos);
  }
}