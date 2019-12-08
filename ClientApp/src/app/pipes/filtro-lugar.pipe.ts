import { Pipe, PipeTransform } from '@angular/core';
import { LugarViewModel } from '../clientes/lugar-view-model';

@Pipe({
  name: 'filtroLugar'
})
export class FiltroLugarPipe implements PipeTransform {

  transform(lugares: LugarViewModel[], searchText: string) {
    if (searchText == null) return lugares;
    return lugares.filter(lugar =>
        lugar.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ||
        lugar.id.toString().toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}
 
}
