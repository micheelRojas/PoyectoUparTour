import { Pipe, PipeTransform } from '@angular/core';
import { ConductorViewModel } from '../clientes/conductor-view-model';

@Pipe({
  name: 'filtroConductor'
})
export class FiltroConductorPipe implements PipeTransform {

  transform(conductores: ConductorViewModel[], searchText: string) {
    if (searchText == null) return conductores;
    return conductores.filter(conductor=>
        conductor.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ||
        conductor.identificacion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}

}
