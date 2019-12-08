import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestauranteViewModel } from '../../restaurante-view-model';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-restaurante-consulta',
  templateUrl: './restaurante-consulta.component.html',
  styleUrls: ['./restaurante-consulta.component.css']
})
export class RestauranteConsultaComponent implements OnInit {

  restaurantes: RestauranteViewModel[];
  searchText: string;
  @Output() seleccionado = new EventEmitter<RestauranteViewModel>();

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit() {
      this.restauranteService.get1().subscribe(result => {
          this.restaurantes= result;
          this.searchText = '';
      });
  }

  seleccionar(restaurante: RestauranteViewModel) {
      this.seleccionado.emit(restaurante);
  }

}
