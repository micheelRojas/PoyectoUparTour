import { Pipe, PipeTransform } from '@angular/core';
import { ReservaViewModel } from '../clientes/reserva-view-model';

@Pipe({
  name: 'filtroReserva'
})
export class FiltroReservaPipe implements PipeTransform {
  transform(reservas: ReservaViewModel[], searchText: string) {
    if (searchText == null) return reservas;
    return reservas.filter(reserva =>
        reserva.id.toString().toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      //  ||
      //  reserva..toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}
  

}
