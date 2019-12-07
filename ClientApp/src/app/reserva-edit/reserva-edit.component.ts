import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservaService } from '../services/reserva.service';
import { Reserva } from '../models/reserva';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reserva-edit',
  templateUrl: './reserva-edit.component.html',
  styleUrls: ['./reserva-edit.component.css']
})
export class ReservaEditComponent implements OnInit {
  reserva:Reserva;
  sreserva:string;
  constructor(
    private route: ActivatedRoute,
    private reservaService: ReservaService,
    private location: Location
  ) { }

  ngOnInit() {
    this.get();
  }
  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.reservaService.get(id).subscribe(hero=>this.reserva=hero);
  }
  update(): void{
    this.reservaService.update(this.reserva).subscribe(()=>this.goBack());
  }
  delete(): void{
    this.reservaService.delete(this.reserva).subscribe(()=>this.goBack());
  }
  goBack(): void{
    this.location.back();
  }
}
