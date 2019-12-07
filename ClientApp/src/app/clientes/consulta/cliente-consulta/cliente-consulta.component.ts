import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteViewModel } from '../../cliente-view-model';



@Component({
    selector: 'app-cliente-consulta',
    templateUrl: './cliente-consulta.component.html',
    styleUrls: ['./cliente-consulta.component.css']
})
export class ClienteConsultaComponent implements OnInit {
    clientes: ClienteViewModel[];
    searchText: string;
    @Output() seleccionado = new EventEmitter<ClienteViewModel>();

    constructor(private clienteService: ClienteService) { }

    ngOnInit() {
        this.clienteService.get1().subscribe(result => {
            this.clientes = result;
            this.searchText = '';
        });
    }

    seleccionar(cliente: ClienteViewModel) {
        this.seleccionado.emit(cliente);
    }
}