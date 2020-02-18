import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  organizadores: any[] = [
    "Ángela Burgos",
    "Camila Santos",
    "Oscar Cabrera",
    "Javier Vertozzi",
    "Victoria Secret",
    "Manolo Cambio",
    "Leidy Diana"
  ];

  categorias: any[] = [
    "Música",
    "Comida",
    "Cine",
    "Teatro",
    "Ciencia",
    "Deportes",
    "Artes"
  ];

  data: any[] = [
    {
      "title" : "Festival Internacional de Cine de Punta del Este",
      "location" : "Santiago del Estero, Argentina",
      "date" : "01/02/2020",
      "geo" : {
        "lat" : "100,00",
        "lon" : "100,00"
      }
    },
    {
      "title" : "Encuentro de Artesanos Misiones",
      "location" : "Oberá, Misiones, Argentina",
      "date" : "01/02/2020",
      "geo" : {
        "lat" : "100,00",
        "lon" : "100,00"
      }
    },
    {
      "title" : "Fiesta Nacional de la Yerba Mate",
      "location" : "Apóstoles, Misiones, Argentina",
      "date" : "01/02/2020",
      "geo" : {
        "lat" : "100,00",
        "lon" : "100,00"
      }
    },
    {
      "title" : "Festival de las Carpas en Itacaruaré",
      "location" : "San Javier, Misiones, Argentina",
      "date" : "01/02/2020",
      "geo" : {
        "lat" : "100,00",
        "lon" : "100,00"
      }
    },
    {
      "title" : "Cultura en Alpargatas",
      "location" : "Posadas, Misiones, Argentina",
      "date" : "01/02/2020",
      "geo" : {
        "lat" : "100,00",
        "lon" : "100,00"
      }
    },
    {
      "title" : "Fiesta Nacional del Inmigrante",
      "location" : "Oberá, Misiones, Argentina",
      "date" : "01/02/2020",
      "geo" : {
        "lat" : "100,00",
        "lon" : "100,00"
      }
    },
    {
      "title" : "Festival de L.O.C.O.S",
      "location" : "San Pedro, Misiones, Argentina",
      "date" : "01/02/2020",
      "geo" : {
        "lat" : "100,00",
        "lon" : "100,00"
      }
    },
    {
      "title" : "Buena onda!",
      "location" : "Eldorado, Misiones, Argentina",
      "date" : "01/02/2020",
      "geo" : {
        "lat" : "100,00",
        "lon" : "100,00"
      }
    }
  ];

  constructor() {}

  loadData(event){
    console.log("Cargando Datos...");
    event.target.complete();
  }

}

