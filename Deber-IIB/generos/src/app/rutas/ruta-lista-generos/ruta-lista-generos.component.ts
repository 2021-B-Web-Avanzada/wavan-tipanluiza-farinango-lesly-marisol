import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../servicios/api/api.service";
import {Router} from "@angular/router";
import {listagenerosI} from "../../modelos/listageneros.interface";


@Component({
  selector: 'app-ruta-lista-generos',
  templateUrl: './ruta-lista-generos.component.html',
  styleUrls: ['./ruta-lista-generos.component.scss']
})
export class RutaListaGenerosComponent implements OnInit {

  generos:listagenerosI[] = [];

  constructor(
    private readonly api:ApiService,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
    this.api
      .getAllGenres()
      .subscribe({
        next: (data) =>{
          this.generos = data
      console.log(data);
    },
        error:(error) =>{
          console.error({error});
        }
      })
  }

  editarGenero(id:number){
    this.router.navigate(['ruta-editar-genero',id])
    console.log(id)
  }

  nuevoGenero(){
    this.router.navigate(['ruta-nuevo-genero'])
  }

}
