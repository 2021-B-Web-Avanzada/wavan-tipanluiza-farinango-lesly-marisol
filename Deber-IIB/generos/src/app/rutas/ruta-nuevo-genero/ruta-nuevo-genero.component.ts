import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {generoI} from "../../modelos/genero.interface";
import {AlertasService} from "../../servicios/alertas/alertas.service"
import {ApiService} from '../../servicios/api/api.service'
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-nuevo-genero',
  templateUrl: './ruta-nuevo-genero.component.html',
  styleUrls: ['./ruta-nuevo-genero.component.scss']
})
export class RutaNuevoGeneroComponent implements OnInit {

  nuevoForm = new FormGroup({
   // idgenero: new FormControl(''),
    nombreGenero: new FormControl(''),
    anioOrigen: new FormControl(''),
    popularidad: new FormControl(''),
    paisOrigen:new FormControl(''),
    instrumento:new FormControl(''),
  });




  constructor(
    private readonly api:ApiService,
    private readonly router:Router,
    private readonly alertas:AlertasService
  ) { }

  ngOnInit(): void {
  }

  postForm(form:generoI){
    this.api.postGenero(form).subscribe({
      next:(data)=>{
        this.alertas.showSuccess('Género añadido correctamente','Bien!');
        console.log(data)
      }
    })

  }

  salir(){
    this.router.navigate(['ruta-lista-generos']);
  }

}
