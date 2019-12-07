import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestauranteService } from '../services/restaurante.service';
import { Restaurante } from '../models/restaurante';
import { Location } from '@angular/common';

@Component({
  selector: 'app-restaurante-edit',
  templateUrl: './restaurante-edit.component.html',
  styleUrls: ['./restaurante-edit.component.css']
})
export class RestauranteEditComponent implements OnInit {
  restaurante:Restaurante;
  constructor(
    private route: ActivatedRoute,
    private restauranteService: RestauranteService,
    private location: Location
  ) { }

  ngOnInit() {
    this.get();
  }
  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.restauranteService.get(id).subscribe(hero=>this.restaurante=hero);
  }
  update(): void{
    this.restauranteService.update(this.restaurante).subscribe(()=>this.goBack());
  }
  delete(): void{
    this.restauranteService.delete(this.restaurante).subscribe(()=>this.goBack());
  }
  goBack(): void{
    this.location.back();
  }
}

