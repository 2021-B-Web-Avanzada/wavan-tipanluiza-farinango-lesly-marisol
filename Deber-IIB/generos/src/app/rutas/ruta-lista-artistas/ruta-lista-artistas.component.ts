import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../servicios/api/api.service"
import {ActivatedRoute, Router} from "@angular/router"
import {listartistasI} from "../../modelos/listartistas.interface"
import {generoI} from "../../modelos/genero.interface";


@Component({
  selector: 'app-ruta-lista-artistas',
  templateUrl: './ruta-lista-artistas.component.html',
  styleUrls: ['./ruta-lista-artistas.component.scss']
})
export class RutaListaArtistasComponent implements OnInit {

  artistas:listartistasI[]=[];
  genero: generoI[]=[];

  constructor(
    private readonly activerouter:ActivatedRoute,
    private readonly api:ApiService,
    private readonly router:Router
  ) { }

  ngOnInit(): void {


        let generoid = this.activerouter.snapshot.paramMap.get('id');

        this.api.getGenero(generoid).subscribe({
          next:(datos)=>{
            this.genero = datos
          }
        })

        this.api.getAllArtistas(generoid).subscribe({
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

  nuevoArtista(id:number){
    this.router.navigate(['ruta-nuevo-artista', id]);
  }

}
