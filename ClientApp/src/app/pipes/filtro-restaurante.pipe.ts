import { Pipe, PipeTransform } from '@angular/core';
import { RestauranteViewModel } from '../clientes/restaurante-view-model';

@Pipe({
  name: 'filtroRestaurante'
})
export class FiltroRestaurantePipe implements PipeTransform {

  
  transform(restaurantes: RestauranteViewModel[], searchText: string) {
    if (searchText == null) return restaurantes;
    return restaurantes.filter(restaurante =>
        restaurante.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ||
        restaurante.id.toString().toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}
}
