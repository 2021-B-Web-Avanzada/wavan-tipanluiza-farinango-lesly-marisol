import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {ApiService} from '../../servicios/api/api.service'
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {generoI} from "../../modelos/genero.interface";
import {AlertasService} from "../../servicios/alertas/alertas.service"


@Component({
  selector: 'app-ruta-editar-genero',
  templateUrl: './ruta-editar-genero.component.html',
  styleUrls: ['./ruta-editar-genero.component.scss']
})
export class RutaEditarGeneroComponent implements OnInit {

  datosGenero: generoI[]=[];

  editarForm = new FormGroup({
      idgenero: new FormControl(''),
      nombreGenero: new FormControl(''),
      anioOrigen: new FormControl(''),
      popularidad: new FormControl(''),
      paisOrigen:new FormControl(''),
      instrumento:new FormControl(''),
  }

  );

  constructor(
    private readonly activerouter:ActivatedRoute,
    private readonly router:Router,
    private readonly api:ApiService,
    private  readonly alertas:AlertasService
  ) { }


  ngOnInit(): void {
    let generoid = this.activerouter.snapshot.paramMap.get('id');
    this.api.getGenero(generoid)
      .subscribe({
        next:(data)=>{
          this.datosGenero = data
          this.editarForm.setValue({
            'idgenero': this.datosGenero[0].idgenero,
            'nombreGenero': this.datosGenero[0].nombreGenero,
            'anioOrigen':this.datosGenero[0].anioOrigen,
            'popularidad': this.datosGenero[0].popularidad,
            'paisOrigen':this.datosGenero[0].paisOrigen,
            'instrumento':this.datosGenero[0].instrumento
          })
          //console.log(this.editarForm.value)
        }
    })
    console.log(generoid)
  }

  postForm(form:generoI,id?:any){
    this.api.putGenero(form, id).subscribe({
      next: (data)=>{
            this.alertas.showSuccess('Datos actualizados','Bien!');
        console.log(data)
      }
    })
    console.log(form)
  }

  eliminarGenero(id:any){
    let datos:generoI = this.editarForm.value;
    this.api.deleteGenero(datos,id).subscribe({
      next:(data)=>{
          this.alertas.showSuccess('Género eliminado','Bien!');
          this.router.navigate(['ruta-lista-generos']);
        console.log(data)
      }
    })
  }

  salir(){
    this.router.navigate(['ruta-lista-generos']);
  }
  verListaArtistas(){
    this.router.navigate(['ruta-lista-artistas']);
  }

}
