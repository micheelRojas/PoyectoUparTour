import { Pipe, PipeTransform } from '@angular/core';
import { ClienteViewModel } from '../clientes/cliente-view-model';

@Pipe({
  name: 'filtroCliente'
})
export class FiltroClientePipe implements PipeTransform {
    transform(clientes: ClienteViewModel[], searchText: string) {
        if (searchText == null) return clientes;
        return clientes.filter(cliente =>
            cliente.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
            ||
            cliente.identificacion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        );
    }
  

}