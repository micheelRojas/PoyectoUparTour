import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReservaViewModel } from '../../reserva-view-model';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-reserva-consulta',
  templateUrl: './reserva-consulta.component.html',
  styleUrls: ['./reserva-consulta.component.css']
})
export class ReservaConsultaComponent implements OnInit {

  reservas: ReservaViewModel[];
  searchText: string;
  @Output() seleccionado = new EventEmitter<ReservaViewModel>();

  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
      this.reservaService.get1().subscribe(result => {
          this.reservas = result;
          this.searchText = '';
      });
  }

  seleccionar(reserva: ReservaViewModel) {
      this.seleccionado.emit(reserva);
  }

}
