import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WebsocketsService} from "../../servicios/websockets/websockets.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-ruta-sala',
  templateUrl: './ruta-sala.component.html',
  styleUrls: ['./ruta-sala.component.scss']
})
export class RutaSalaComponent implements OnInit, OnDestroy {

  nombre = '';
  salaId = '';
  arregloSuscripciones: Subscription[] = [];
  mensaje = '';
  arregloMensajes:{
    salaId: number;
    nombre: string;
    mensaje: string;
    posicion: 'izq' | 'der';
  }[] = [];

  constructor(
    private readonly act: ActivatedRoute,
    private readonly websocketsService: WebsocketsService
  ) {}
  enviarMensaje(){
    this.arregloMensajes.push({
      mensaje:this.mensaje,
      salaId: +this.salaId,
      nombre: this.nombre,
      posicion: 'izq'
    })
    this.websocketsService.ejecutarEventoEnviarMensaje(
      +this.salaId, this.nombre, this.mensaje
    );
    this.mensaje = '';
  }

  ngOnInit(): void {
    console.log('Init');
    this.act
      .params
      .subscribe({
        next:(parametrosDeRuta)=>{
          const salaId = parametrosDeRuta['salaId'];
          const nombre = parametrosDeRuta['nombre'];
          this.nombre = nombre;
          this.salaId = salaId;
          this.logicaSalas(this.salaId,this.nombre)
        }
      })
  }
  logicaSalas(salaId:string, nombre:string){
    this.desSubscribirse();
  const respEscucharEventoMensaje = this.websocketsService.escucharEventoMensajeSala()
    .subscribe({
      next:(data:any)=>{
        console.log('Enviaron Mensaje', data);
        this.arregloMensajes.push({
          mensaje:data.mensaje,
          salaId: data.salaId,
          nombre: data.nombre,
          posicion: data.nombre === this.nombre ? 'izq' : 'der'
        })
      },
      error:(error)=>{
        console.error({error})
      }
    })
  const respEscucharEventoUnirseSala = this.websocketsService.escucharEventoMensajeSala()
    .subscribe({
      next:(data)=>{
        console.log('Alguien entro', data);
      },
      error:(error)=>{
        console.error({error})
      }
    })
this.arregloSuscripciones.push(respEscucharEventoUnirseSala);
  this.arregloSuscripciones.push(respEscucharEventoMensaje);
this.websocketsService.ejecutarEventoUnirseSala(+this.salaId, this.nombre)
  }

  desSubscribirse(){
    this.arregloSuscripciones.forEach(
      (suscripcion) =>{
        suscripcion.unsubscribe();
      }
    );
    this.arregloSuscripciones = [];
  }


  ngOnDestroy() {
    console.log('Destroy')
  }

}
