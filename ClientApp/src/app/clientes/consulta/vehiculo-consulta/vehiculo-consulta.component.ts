import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { VehiculoViewModel } from '../../vehiculo-view-model';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-vehiculo-consulta',
  templateUrl: './vehiculo-consulta.component.html',
  styleUrls: ['./vehiculo-consulta.component.css']
})
export class VehiculoConsultaComponent implements OnInit {

  vehiculos: VehiculoViewModel[];
  searchText: string;
  @Output() seleccionado = new EventEmitter<VehiculoViewModel>();

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
      this.vehiculoService.get1().subscribe(result => {
          this.vehiculos = result;
          this.searchText = '';
      });
  }

  seleccionar(vehiculo: VehiculoViewModel) {
      this.seleccionado.emit(vehiculo);
  }

}
