import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {
  cliente:Cliente;
  scliente:string;
  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private location: Location
  ) { }

  ngOnInit() {
    this.get();
  }
  get(): void {
    const id = +this.route.snapshot.paramMap.get('identificacion');
    this.clienteService.get(id).subscribe(hero=>this.cliente=hero);
  }
  update(): void{
    this.clienteService.update(this.cliente).subscribe(()=>this.goBack());
  }
  delete(): void{
    this.clienteService.delete(this.cliente).subscribe(()=>this.goBack());
  }
  goBack(): void{
    this.location.back();
  }
}

