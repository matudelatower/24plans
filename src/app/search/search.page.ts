import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  categorias: any[] = [
    "Música",
    "Comida",
    "Cine",
    "Teatro",
    "Ciencia",
    "Deportes",
    "Artes"
  ];

  localidades: any[] = [
    "Apóstoles",
    "Eldorado",
    "Gobernador Roca",
    "Jardín América",
    "Leandro N. Alem",
    "Puerto Iguazú",
    "Posadas"
  ];

  constructor() { }

  ngOnInit() {
  }

}
