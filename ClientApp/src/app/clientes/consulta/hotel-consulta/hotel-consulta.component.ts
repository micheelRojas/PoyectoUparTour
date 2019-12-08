
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { HotelViewModel } from '../../hotel-view-model';



@Component({
  selector: 'app-hotel-consulta',
  templateUrl: './hotel-consulta.component.html',
  styleUrls: ['./hotel-consulta.component.css']
})
export class HotelConsultaComponent implements OnInit {

  hoteles:HotelViewModel[];
  searchText: string;
  @Output() seleccionado = new EventEmitter<HotelViewModel>();

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
      this.hotelService.get1().subscribe(result => {
          this.hoteles = result;
          this.searchText = '';
      });
  }

  seleccionar(hotel: HotelViewModel) {
      this.seleccionado.emit(hotel);
  }
}



