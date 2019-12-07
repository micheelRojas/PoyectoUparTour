import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../services/vehiculo.service';
import { Vehiculo } from '../models/vehiculo';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vehiculo-edit',
  templateUrl: './vehiculo-edit.component.html',
  styleUrls: ['./vehiculo-edit.component.css']
})
export class VehiculoEditComponent implements OnInit {
  vehiculo:Vehiculo;
  constructor(
    private route: ActivatedRoute,
    private vehiculoService: VehiculoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.get();
  }
  get(): void {
    const id = this.route.snapshot.paramMap.get('placa');
    this.vehiculoService.get(id).subscribe(hero=>this.vehiculo=hero);
  }
  update(): void{
    this.vehiculoService.update(this.vehiculo).subscribe(()=>this.goBack());
  }
  delete(): void{
    this.vehiculoService.delete(this.vehiculo).subscribe(()=>this.goBack());
  }
  goBack(): void{
    this.location.back();
  }
}
