import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import {Map, Marker} from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  selector: 'maps-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit {

  @Input() lngLat?:[number,number]
  @ViewChild('map') public divMap?:ElementRef

  public map? : Map ;

  ngAfterViewInit(): void {

    if(!this.divMap?.nativeElement){
      throw 'Map Div not Found';
    }
    if (!this.lngLat) {
      throw 'Latitud y longitud requeridas';
    }

    this.map = new Map({
      container: this.divMap.nativeElement, // container HTML element
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive:false
    });
    new Marker()
    .setLngLat(this.lngLat)
    .addTo(this.map)

  }

}
