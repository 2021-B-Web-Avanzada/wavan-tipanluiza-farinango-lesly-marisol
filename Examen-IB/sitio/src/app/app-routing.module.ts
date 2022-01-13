import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaHomeComponent} from "./rutas/ruta-home/ruta-home.component";
import {RutaDogCareComponent} from "./rutas/ruta-dog-care/ruta-dog-care.component";

const routes: Routes = [
  {
    path:'home',
    component:RutaHomeComponent
  },
  {
    path:'dog-care',
    component: RutaDogCareComponent
  },
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
