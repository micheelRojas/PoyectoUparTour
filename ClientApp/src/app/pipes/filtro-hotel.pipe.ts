import { Pipe, PipeTransform } from '@angular/core';

import { HotelViewModel } from '../clientes/hotel-view-model';

@Pipe({
  name: 'filtroHotel'
})
export class FiltroHotelPipe implements PipeTransform {

  transform(hoteles: HotelViewModel[], searchText: string) {
    if (searchText == null) return hoteles;
    return hoteles.filter(hotel =>
        hotel.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
       ||
       hotel.id.toString().toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}

}

