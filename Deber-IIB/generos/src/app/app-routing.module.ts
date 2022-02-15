import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaListaGenerosComponent} from "./rutas/ruta-lista-generos/ruta-lista-generos.component";
import {RutaEditarGeneroComponent} from "./rutas/ruta-editar-genero/ruta-editar-genero.component";
import {RutaNuevoGeneroComponent} from "./rutas/ruta-nuevo-genero/ruta-nuevo-genero.component";
import {RutaListaArtistasComponent} from "./rutas/ruta-lista-artistas/ruta-lista-artistas.component";
import {RutaEditarArtistaComponent} from "./rutas/ruta-editar-artista/ruta-editar-artista.component";
import {RutaNuevoArtistaComponent} from "./rutas/ruta-nuevo-artista/ruta-nuevo-artista.component";


const routes: Routes = [
  {
  path:'',
  redirectTo:'ruta-lista-generos',
  pathMatch: 'full'
},
  {
    path:'ruta-lista-generos',
    component: RutaListaGenerosComponent

  },
  {
    path:'ruta-editar-genero/:id',
    component: RutaEditarGeneroComponent
  },
  {
    path:'ruta-nuevo-genero',
    component:RutaNuevoGeneroComponent
  },
  {
    path:'ruta-lista-artistas/:id',
    component: RutaListaArtistasComponent
  },
  {
    path: 'ruta-editar-artista/:id',
    component: RutaEditarArtistaComponent
  },
  {
    path: 'ruta-nuevo-artista/:id',
    component: RutaNuevoArtistaComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
