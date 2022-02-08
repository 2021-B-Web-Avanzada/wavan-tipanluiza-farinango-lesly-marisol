import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RutaListaGenerosComponent } from './rutas/ruta-lista-generos/ruta-lista-generos.component';
import { RutaNuevoGeneroComponent } from './rutas/ruta-nuevo-genero/ruta-nuevo-genero.component';
import { RutaEditarGeneroComponent } from './rutas/ruta-editar-genero/ruta-editar-genero.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'

import {HttpClientModule} from '@angular/common/http'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { RutaListaArtistasComponent } from './rutas/ruta-lista-artistas/ruta-lista-artistas.component';
import { RutaNuevoArtistaComponent } from './rutas/ruta-nuevo-artista/ruta-nuevo-artista.component';
import { RutaEditarArtistaComponent } from './rutas/ruta-editar-artista/ruta-editar-artista.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RutaListaGenerosComponent,
    RutaNuevoGeneroComponent,
    RutaEditarGeneroComponent,
    RutaListaArtistasComponent,
    RutaNuevoArtistaComponent,
    RutaEditarArtistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
