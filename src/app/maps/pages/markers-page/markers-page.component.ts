import { Component, ElementRef, ViewChild } from '@angular/core';
import {LngLat, Map, Marker} from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {

  @ViewChild('map') public divMap?:ElementRef

  public map? : Map ;
  public latitud:number = -74.1;
  public longitud:number = 4.6;
  public currentlngLat: LngLat = new LngLat(this.latitud,this.longitud );







  ngAfterViewInit(): void {
   if (!this.divMap) {
    throw "El elemento HTML no fue encontrado";

   }
    this.map = new Map({
      container: this.divMap.nativeElement, // container HTML element
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentlngLat, // starting position [lng, lat]
      zoom: 13, // starting zoom
    });








    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = `Duvan Riaño`

    // const marker = new Marker({
    //   // color:'#A435F0'
    //   element:markerHtml
    // })
    //   .setLngLat(this.currentlngLat)
    //   .addTo(this.map);

  }



}
