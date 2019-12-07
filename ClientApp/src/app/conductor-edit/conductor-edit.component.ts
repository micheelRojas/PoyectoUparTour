import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConductorService } from '../services/conductor.service';
import { Conductor } from '../models/conductor';
import { Location } from '@angular/common';

@Component({
  selector: 'app-conductor-edit',
  templateUrl: './conductor-edit.component.html',
  styleUrls: ['./conductor-edit.component.css']
})
export class ConductorEditComponent implements OnInit {
  conductor:Conductor;
  constructor(
    private route: ActivatedRoute,
    private conductorService: ConductorService,
    private location: Location
  ) { }

  ngOnInit() {
    this.get();
  }
  get(): void {
    const id = +this.route.snapshot.paramMap.get('identificacion');
    this.conductorService.get(id).subscribe(hero=>this.conductor=hero);
  }
  update(): void{
    this.conductorService.update(this.conductor).subscribe(()=>this.goBack());
  }
  delete(): void{
    this.conductorService.delete(this.conductor).subscribe(()=>this.goBack());
  }
  goBack(): void{
    this.location.back();
  }
}


