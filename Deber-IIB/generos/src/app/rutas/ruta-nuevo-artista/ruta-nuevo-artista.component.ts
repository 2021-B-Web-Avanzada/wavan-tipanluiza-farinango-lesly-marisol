import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {artistaI} from "../../modelos/artista.interface";
import {AlertasService} from "../../servicios/alertas/alertas.service"
import {ApiService} from '../../servicios/api/api.service'
import {ActivatedRoute, Router} from "@angular/router";
import {generoI} from "../../modelos/genero.interface";
@Component({
  selector: 'app-ruta-nuevo-artista',
  templateUrl: './ruta-nuevo-artista.component.html',
  styleUrls: ['./ruta-nuevo-artista.component.scss']
})
export class RutaNuevoArtistaComponent implements OnInit {

  nuevoForm = new FormGroup({
    nombre: new FormControl(''),
    edad: new FormControl(''),
    nacionalidad:new FormControl(''),
    retirado:new FormControl(''),
    voz: new FormControl(''),
    idgenero: new FormControl({
      value: this.activerouter.snapshot.paramMap.get('id'),
      disabled: false
    })
  });

  constructor(
    private readonly api:ApiService,
    private readonly router:Router,
    private readonly alertas:AlertasService,
    private readonly activerouter:ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  postForm(form:artistaI){
    let idgenero = this.activerouter.snapshot.paramMap.get('id');
    this.api.postArtista(form,idgenero).subscribe({
      next:(data)=>{
        this.alertas.showSuccess('Artista añadido correctamente','Bien!');
        console.log(data)
      }
    })

  }
  salir(){
    let idgenero = this.activerouter.snapshot.paramMap.get('id');
    this.router.navigate(['ruta-lista-artistas',idgenero]);
  }



}
