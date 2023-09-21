import { Component, OnInit } from '@angular/core';
import { Map, View } from 'ol';
import { OSM, TileWMS } from 'ol/source';
import WebGLTileLayer from 'ol/layer/WebGLTile';

import { environment } from '../../../environments/environment';
import RenderEvent from 'ol/render/Event';
import { Style } from 'ol/style';

@Component({
  selector: 'app-web-gl',
  templateUrl: './web-gl.component.html',
  styleUrls: ['./web-gl.component.scss']
})
export class WebGlComponent implements OnInit {
  style: Style | any = {
    filter: [ '==', [ 'get', 'layer' ], 'WebGLTileLayer' ],
    contrast: -0.5,
  };
  map: Map = new Map();
  webGLTileLayer: WebGLTileLayer = new WebGLTileLayer({
    source: new TileWMS({
      url: `${ environment.ubimetLink }${ environment.ubimetKey }/`,
      params: {
        'LAYERS': environment.ubimetLayer,
        'time': '2023-09-21T18:45:00Z',
      },
      serverType: 'mapserver',
      // crossOrigin: 'anonymous'
    }),
    style: this.style
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
