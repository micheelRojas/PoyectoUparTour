import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';
//import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hoteles:Hotel[];
  constructor(private hotelservice:HotelService) { }

  ngOnInit() {
    this.getAll();
  }
  
  getAll(){
    this.hotelservice.getAll().subscribe(hoteles=>this.hoteles=hoteles);
  }
}
