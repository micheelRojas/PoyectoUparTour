import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../services/reserva.service';
import { Reserva } from '../models/reserva';
import { Observable } from 'rxjs/internal/Observable';

import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reserva-add',
  templateUrl: './reserva-add.component.html',
  styleUrls: ['./reserva-add.component.css']
})
export class ReservaAddComponent implements OnInit {
  cliente:Cliente;
  scliente:string;
  reserva :Reserva;
  
  constructor(private reservaService: ReservaService, private route: ActivatedRoute,
    private clienteService: ClienteService,
    private location: Location) { }
  
  
  public recibir(idCliente: string){
    //this.idCli=idCliente;
  }
  ngOnInit() {
    this.get();

    this.reserva={id:0, clienteid:'', estado:false, cantidadpersonas:0, fecha:"00/00/0000", hora:"00:00"};
  }
  
  get(): void {
    const id = +this.route.snapshot.paramMap.get('clienteid');
    this.clienteService.get(id).subscribe(hero=>this.cliente=hero);
  }
  goBack(): void{
    this.location.back();
    
  }
  add(){
  
    this.reserva.clienteid=this.cliente.identificacion;
    this.reservaService.addReserva(this.reserva)
    .subscribe(reserva => {
      alert('Se agregó una nueva reserva')
    });
  }
}