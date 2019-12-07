import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../services/reserva.service';
import { Reserva } from '../models/reserva';
//import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.css']
})
export class ReservaListComponent implements OnInit {
  reservas:Reserva[];
  constructor(private reservaservice:ReservaService) { }

  ngOnInit() {
    this.getAll();
  }
  
  getAll(){
    this.reservaservice.getAll().subscribe(reservas=>this.reservas=reservas);
  }
}
