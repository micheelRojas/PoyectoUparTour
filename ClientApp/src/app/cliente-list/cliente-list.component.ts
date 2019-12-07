import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';
//import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes:Cliente[];
  constructor(private clienteservice:ClienteService) { }

  ngOnInit() {
    this.getAll();
  }
  
  getAll(){
    this.clienteservice.getAll().subscribe(clientes=>this.clientes=clientes);
  }
}

