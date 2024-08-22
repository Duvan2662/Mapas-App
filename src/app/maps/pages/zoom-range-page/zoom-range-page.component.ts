import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {Map} from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})

export class ZoomRangePageComponent implements AfterViewInit {


  @ViewChild('map') public divMap?:ElementRef

  public zoom : number = 10;
  public map? : Map ;




  ngAfterViewInit(): void {
   if (!this.divMap) {
    throw "El elemento HTML no fue encontrado";

   }
    this.map = new Map({
      container: this.divMap.nativeElement, // container HTML element
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners();
  }



  public mapListeners = ():void => {
    if (!this.map) {
      throw "Mapa no inicializado";
    }
    this.map.on('zoom', (evento) => {
      this.zoom = this.map!.getZoom();
    })

    this.map.on('zoomend', (evento) => {
      if (this.map!.getZoom()<18) {
        return
      }
      this.map!.zoomTo(18);

    })



  }

  public zoomIn = ():void => {
    this.map?.zoomIn();
  }
  public zoomOut = ():void => {
    this.map?.zoomOut();
  }

  public zoomChanged = (value: string)  => {
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom)
  }

}
