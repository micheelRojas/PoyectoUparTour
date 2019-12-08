import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConductorViewModel } from '../../conductor-view-model';
import { ConductorService } from 'src/app/services/conductor.service';

@Component({
  selector: 'app-conductor-consulta',
  templateUrl: './conductor-consulta.component.html',
  styleUrls: ['./conductor-consulta.component.css']
})
export class ConductorConsultaComponent implements OnInit {

  conductores: ConductorViewModel[];
    searchText: string;
    @Output() seleccionado = new EventEmitter<ConductorViewModel>();

    constructor(private conductorService: ConductorService) { }

    ngOnInit() {
        this.conductorService.get1().subscribe(result => {
            this.conductores = result;
            this.searchText = '';
        });
    }

    seleccionar(conductor: ConductorViewModel) {
        this.seleccionado.emit(conductor);
    }
}
