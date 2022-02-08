import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../servicios/api/api.service"
import {Router} from "@angular/router"
import {listartistasI} from "../../modelos/listartistas.interface"


@Component({
  selector: 'app-ruta-lista-artistas',
  templateUrl: './ruta-lista-artistas.component.html',
  styleUrls: ['./ruta-lista-artistas.component.scss']
})
export class RutaListaArtistasComponent implements OnInit {

  artistas:listartistasI[]=[];

  constructor(
    private readonly api:ApiService,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
    this.api.getAllArtistas().subscribe({
      next:(data)=>{
        this.artistas = data
        console.log(data)
      }
    })
  }
  editarArtista(id:number){
    this.router.navigate(['ruta-editar-artista', id]);
    console.log(id)
  }

  nuevoArtista(){
    this.router.navigate(['ruta-nuevo-artista']);
  }

}
