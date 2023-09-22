import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebGlComponent } from './UI/web-gl/web-gl.component';
import { OsmComponent } from './UI/osm/osm.component';

@NgModule({
  declarations: [
    AppComponent,
    WebGlComponent,
    OsmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
