import {Injectable} from '@angular/core';

@Injectable(
  {
    providedIn : 'root'
  }
)
export class AuthService{
  estaLogueado = false;

  roles = [
    'admin',
    'supervisor',
    'usuario'
  ];
}
