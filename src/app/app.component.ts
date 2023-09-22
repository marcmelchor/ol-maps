import { Component, OnInit } from '@angular/core';
import { fromLonLat } from 'ol/proj';
import { Map, View } from 'ol';
import { TopoJSON } from 'ol/format';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

}
