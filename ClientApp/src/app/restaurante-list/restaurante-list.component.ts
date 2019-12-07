import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../services/restaurante.service';
import { Restaurante } from '../models/restaurante';
//import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-restaurante-list',
  templateUrl: './restaurante-list.component.html',
  styleUrls: ['./restaurante-list.component.css']
})
export class RestauranteListComponent implements OnInit {
  restaurantes:Restaurante[];
  constructor(private restauranteservice:RestauranteService) { }

  ngOnInit() {
    this.getAll();
  }
  
  getAll(){
    this.restauranteservice.getAll().subscribe(restaurantes=>this.restaurantes=restaurantes);
  }
}
