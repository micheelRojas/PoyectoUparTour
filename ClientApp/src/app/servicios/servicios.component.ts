import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  images = [`Valledupar.jpg`, `Manaure.jpg`, `plaza.jpg`].map((n) => `./assets/${n}`);
  constructor() { }

  ngOnInit() {
  }

}
