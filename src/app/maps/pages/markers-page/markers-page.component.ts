import { Component, ElementRef, ViewChild } from '@angular/core';
import {LngLat, Map, Marker} from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

interface MarkerAndColor {
  color:string;
  marker:Marker;
}

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

  public markers : MarkerAndColor[] = [];






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


  public createMarker() {

    if (!this.map) {
      return
    }
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));//Creacion de un exadecimal
    const lngLat = this.map.getCenter();

    this.addMarker(lngLat,color)
  }


  public addMarker = (lngLat:LngLat, color:string):void  => {
    if (!this.map) {
      return
    }

    const marker = new Marker({
      color:color,
      draggable:true
    })
    .setLngLat(lngLat)
    .addTo(this.map)

    this.markers.push({
      color:color,
      marker: marker
    });
  }

  public deleteMartek = (index:number)  => {
    this.markers[index].marker.remove();
    this.markers.splice(index,1);
  }
  public flyTo = (marker:Marker) => {
    this.map?.flyTo({
      zoom:14,
      center:marker.getLngLat()
    });

  }



}
