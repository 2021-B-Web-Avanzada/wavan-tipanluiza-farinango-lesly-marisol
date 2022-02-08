import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {map, Observable} from 'rxjs';
import {listagenerosI} from "../../modelos/listageneros.interface";
import {environment} from "../../../environments/environment";
import{generoI} from "../../modelos/genero.interface"
import{listartistasI} from "../../modelos/listartistas.interface";
import{responseI}from "../../modelos/response.interface"


@Injectable({
  providedIn: 'any'
})
export class ApiService {


  constructor(
    private readonly http: HttpClient
  ) { }

  getAllGenres():Observable<listagenerosI[]>{
    const url = environment.urlAPI + 'listGeneros'
    return this.http
      .get(url)
      .pipe(
        map(
          (resultadoEnData)=> resultadoEnData as listagenerosI[]
      )
      );

  }


  getGenero(id?:any):Observable<generoI[]>{
    const url = environment.urlAPI + 'generoid/'+id;
    return this.http
      .get(url)
      .pipe(
        map(
          (resultadoEnData)=> resultadoEnData as generoI[]
        )
      );

  }

  putGenero(form:generoI, id?:any):Observable<any>{
    const url = environment.urlAPI+'updateGenero/'+id
    return this.http
      .put(url,form,{responseType: 'text'});
  }

  deleteGenero(form:generoI, id?:any):Observable<any>{
    const url = environment.urlAPI+'deleteGenero/'+id
    return this.http
      .delete(url,{responseType: 'text'})

  }

postGenero(form:generoI):Observable<any>{
    const url = environment.urlAPI+'addGenero'
    return this.http
      .post(url,form,{responseType: 'text'})
}

getAllArtistas():Observable<listartistasI[]>{
    const url = environment.urlAPI+'listArtists'
    return this.http
      .get(url)
      .pipe(
        map(
          (resultadoEnData)=> resultadoEnData as listartistasI[]
        )
      )

}

}
