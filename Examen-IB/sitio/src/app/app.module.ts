import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaDogCareComponent } from './rutas/ruta-dog-care/ruta-dog-care.component';
import {BannerImagenesModule} from "./componentes/banner-imagenes/banner-imagenes.module";
import {SliderModule} from "./componentes/slider/slider.module";
import {FirstSectionModule} from "./componentes/first-section/first-section.module";

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaDogCareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerImagenesModule,
    SliderModule,
    FirstSectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
