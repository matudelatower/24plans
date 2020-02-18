import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  @ViewChild('slideWithNav', {static: false}) slideWithNav: IonSlides;

  sliderOne: any;
  
  // este será el manejador del slider image
  slideOptsOne = {initialSlide: 0,slidesPerView: 1,autoplay:false};

  // uso esta variable apra poder simular la carga de un conjunto de imágenes
  fotos: any[] = Array(8);

  constructor() {this.sliderOne ={isBeginningSlide: true,isEndSlide: false};}

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {this.checkIfNavDisabled(object, slideView);}
 
  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {this.checkisBeginning(object, slideView);this.checkisEnd(object, slideView);}
 
  checkisBeginning(object, slideView) {slideView.isBeginning().then((istrue) => {object.isBeginningSlide = istrue;});}

  checkisEnd(object, slideView) {slideView.isEnd().then((istrue) => {object.isEndSlide = istrue;});}

  ngOnInit() {}

}