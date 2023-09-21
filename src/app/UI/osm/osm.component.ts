import { Component, OnInit } from '@angular/core';
import { fromLonLat } from 'ol/proj';
import { Map, View } from 'ol';
import { TopoJSON } from 'ol/format';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-osm',
  templateUrl: './osm.component.html',
  styleUrls: ['./osm.component.scss']
})
export class OsmComponent implements OnInit {
  rules: any = [
    {
      filter: [ '==', [ 'get', 'layer' ], 'water' ],
      style: {
        'fill-color': '#9db9e8',
      },
    },
    {
      else: true,
      filter: [ 'all', [ '==', [ 'get', 'layer' ], 'roads' ], [ 'get', 'railway' ] ],
      style: {
        'stroke-color': '#7de',
        'stroke-width': 1,
        'z-index': [ 'number', [ 'get', 'sort_key' ], 0 ],
      },
    },
    {
      else: true,
      filter: [ '==', [ 'get', 'layer' ], 'roads' ],
      style: {
        'stroke-color': [
          'match',
          [ 'get', 'kind' ],
          'major_road',
          '#776',
          'minor_road',
          '#ccb',
          'highway',
          '#f39',
          'none',
        ],
        'stroke-width': [ 'match', [ 'get', 'kind' ], 'highway', 1.5, 1 ],
        'z-index': [ 'number', [ 'get', 'sort_key' ], 0 ],
      },
    },
    {
      else: true,
      filter: [
        'all',
        [ '==', [ 'get', 'layer' ], 'buildings' ],
        [ '<', [ 'resolution' ], 10 ],
      ],
      style: {
        'fill-color': '#666',
        'stroke-color': '#444666',
        'stroke-width': 1,
        'z-index': [ 'number', [ 'get', 'sort_key' ], 0 ],
      },
    },
  ];
  map: Map = new Map();

  ngOnInit(): void {
    this.osmVectorTiles();
  }

  osmVectorTiles(): void {
    this.map.setLayers(
      [
        new VectorTileLayer({
          source: new VectorTileSource({
            attributions: 'Map OSM',
            format: new TopoJSON({
              layerName: 'layer',
              layers: [ 'water', 'roads', 'buildings' ],
            }),
            maxZoom: 16,
            url: `https://tile.nextzen.org/tilezen/vector/v1/all/{z}/{x}/{y}.topojson?api_key=${ environment.netzenApiKey }`,
          }),
          style: this.rules,
        }),
      ],
    );
    this.map.setTarget('map');
    this.map.setView(new View({
      enableRotation: true,
      center: fromLonLat([ -74.0064, 40.7142 ]),
      maxZoom: 19,
      zoom: 15,
    }));
  }
}
