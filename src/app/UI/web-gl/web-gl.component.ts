import { Component, OnInit } from '@angular/core';
import { Map, View } from 'ol';
import { OSM, TileWMS } from 'ol/source';
import WebGLTileLayer from 'ol/layer/WebGLTile';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-web-gl',
  templateUrl: './web-gl.component.html',
  styleUrls: ['./web-gl.component.scss']
})
export class WebGlComponent implements OnInit {
  map: Map = new Map();
  webGLTileLayer: WebGLTileLayer = new WebGLTileLayer({
    source: new TileWMS({
      url: `https://{a-d}-mapcache-at.ubimet.com/${environment.ubimetKey}/`,
      params: {
        'LAYERS': environment.ubimetLayer,
        'time': '2023-09-21T18:45:00Z'
      },
      serverType: 'mapserver',
      // crossOrigin: 'anonymous'
    }),
  });

  ngOnInit(): void {
    this.map.setLayers([
      new WebGLTileLayer({
        source: new OSM()
      }),
      this.webGLTileLayer,
    ]);
    this.map.setView(new View({ center: [0, 0], zoom: 3 }))
    this.map.setTarget('map');
  }
}
