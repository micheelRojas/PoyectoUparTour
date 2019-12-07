import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugarService } from '../services/lugar.service';
import { Lugar } from '../models/lugar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lugar-edit',
  templateUrl: './lugar-edit.component.html',
  styleUrls: ['./lugar-edit.component.css']
})
export class LugarEditComponent implements OnInit {
  lugar:Lugar;
  constructor(
    private route: ActivatedRoute,
    private lugarService: LugarService,
    private location: Location
  ) { }

  ngOnInit() {
    this.get();
  }
  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.lugarService.get(id).subscribe(hero=>this.lugar=hero);
  }
  update(): void{
    this.lugarService.update(this.lugar).subscribe(()=>this.goBack());
  }
  delete(): void{
    this.lugarService.delete(this.lugar).subscribe(()=>this.goBack());
  }
  goBack(): void{
    this.location.back();
  }
}

