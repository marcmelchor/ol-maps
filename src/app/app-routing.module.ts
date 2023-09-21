import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OsmComponent } from './UI/osm/osm.component';
import { WebGlComponent } from './UI/web-gl/web-gl.component';

const routes: Routes = [
  {
    path: '',
    component: OsmComponent,
  },
  {
    path: 'web-gl',
    component: WebGlComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
