import { Component, OnInit } from '@angular/core';
import { LugarService } from '../services/lugar.service';
import { Lugar } from '../models/lugar';
//import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-lugar-list',
  templateUrl: './lugar-list.component.html',
  styleUrls: ['./lugar-list.component.css']
})
export class LugarListComponent implements OnInit {
  lugares:Lugar[];
  constructor(private lugarservice:LugarService) { }

  ngOnInit() {
    this.getAll();
  }
  
  getAll(){
    this.lugarservice.getAll().subscribe(lugares=>this.lugares=lugares);
  }
}
