import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  categorias: any[] = [
    "Música",
    "Comida",
    "Cine",
    "Teatro",
    "Ciencia",
    "Deportes",
    "Artes"
  ];
  
  fotos: any[] = Array(4);

  constructor() { }

  ngOnInit() {
  }

}
