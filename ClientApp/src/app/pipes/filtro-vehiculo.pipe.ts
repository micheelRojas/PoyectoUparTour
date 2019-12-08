import { Pipe, PipeTransform } from '@angular/core';
import { VehiculoViewModel } from '../clientes/vehiculo-view-model';

@Pipe({
  name: 'filtroVehiculo'
})
export class FiltroVehiculoPipe implements PipeTransform {
  transform(vehiculos: VehiculoViewModel[], searchText: string) {
    if (searchText == null) return vehiculos;
    return vehiculos.filter(vehiculo=>
      vehiculo.placa.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ||
        vehiculo.capacidad.toString().toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}
  
}
