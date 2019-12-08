import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LugarViewModel } from '../../lugar-view-model';
import { LugarService } from 'src/app/services/lugar.service';

@Component({
  selector: 'app-lugar-consulta',
  templateUrl: './lugar-consulta.component.html',
  styleUrls: ['./lugar-consulta.component.css']
})
export class LugarConsultaComponent implements OnInit {

  lugares: LugarViewModel[];
  searchText: string;
  @Output() seleccionado = new EventEmitter<LugarViewModel>();

  constructor(private lugarService: LugarService) { }

  ngOnInit() {
      this.lugarService.get1().subscribe(result => {
          this.lugares = result;
          this.searchText = '';
      });
  }

  seleccionar(lugar: LugarViewModel) {
      this.seleccionado.emit(lugar);
  }

}
