import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../services/conductor.service';
import { Conductor } from '../models/conductor';
//import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-conductor-list',
  templateUrl: './conductor-list.component.html',
  styleUrls: ['./conductor-list.component.css']
})
export class ConductorListComponent implements OnInit {
  conductores:Conductor[];
  constructor(private conductorservice:ConductorService) { }

  ngOnInit() {
    this.getAll();
  }
  
  getAll(){
    this.conductorservice.getAll().subscribe(conductores=>this.conductores=conductores);
  }
}
