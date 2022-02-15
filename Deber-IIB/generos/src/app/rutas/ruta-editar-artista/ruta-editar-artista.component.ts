import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, RouterEvent} from '@angular/router';
import {artistaI} from '../../modelos/artista.interface';
import{ApiService} from '../../servicios/api/api.service';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {Observable} from "rxjs";
import {AlertasService} from "../../servicios/alertas/alertas.service"

@Component({
  selector: 'app-ruta-editar-artista',
  templateUrl: './ruta-editar-artista.component.html',
  styleUrls: ['./ruta-editar-artista.component.scss']
})
export class RutaEditarArtistaComponent implements OnInit {

  constructor(
    private  readonly activerouter: ActivatedRoute,
    private  readonly router:Router,
    private readonly api:ApiService,
    private  readonly alertas:AlertasService
  ) { }

  datosArtista:artistaI[] = [];
  editarFormArtista =  new FormGroup({
      idartista: new  FormControl(''),
      nombre: new FormControl(''),
      edad: new FormControl(''),
      nacionalidad: new FormControl(''),
      retirado: new FormControl(''),
      voz: new FormControl(''),
      idgenero: new FormControl('')

  }

  )

  ngOnInit(): void {
    let idartista = this.activerouter.snapshot.paramMap.get('id');
    console.log(idartista);
    this.api.getArtista(idartista).subscribe({
    next:(data)=>{
      this.datosArtista = data;
        console.log(this.datosArtista[0])
        this.editarFormArtista.setValue(
          {
            'idartista': this.datosArtista[0].idartista,
            'nombre': this.datosArtista[0].nombre,
            'edad': this.datosArtista[0].edad,
            'nacionalidad': this.datosArtista[0].nacionalidad,
            'retirado': this.datosArtista[0].retirado,
            'voz': this.datosArtista[0].voz,
            'idgenero': this.datosArtista[0].idgenero
          }
        );
       // console.log(this.editarFormArtista.value)
    }
    })

  }
  postForm(form:artistaI, id:number){
    this.api.putArtista(form,id).subscribe({
      next:(data)=>{
        this.alertas.showSuccess('Datos actualizados','Bien!');
        console.log(data)
      }
    })
    console.log(form)
  }

  eliminarArtista(id:number){
    let datos:artistaI = this.editarFormArtista.value
    this.api.deleteArtista(datos, id).subscribe({
      next:(data)=>{
        this.alertas.showSuccess('Artista eliminado','Bien!');
        this.router.navigate(['ruta-lista-artistas']);
        console.log(data)
      }
    })
  }
  salir(){
    let idgenero = this.datosArtista[0].idgenero;
    this.router.navigate(['ruta-lista-artistas', idgenero]);
  }


}
