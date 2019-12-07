import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.css']
})
export class HotelEditComponent implements OnInit {
  hotel:Hotel;
  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private location: Location
  ) { }

  ngOnInit() {
    this.get();
  }
  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hotelService.get(id).subscribe(hero=>this.hotel=hero);
  }
  update(): void{
    this.hotelService.update(this.hotel).subscribe(()=>this.goBack());
  }
  delete(): void{
    this.hotelService.delete(this.hotel).subscribe(()=>this.goBack());
  }
  goBack(): void{
    this.location.back();
  }
}


