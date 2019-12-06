import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ConecPantherService } from '../services/conec-panther.service';

/**
 * @description Clase  que contiene la privatizacion
 * de rutas y la obligacion de estar autenticados
 * 
 * @author Yesid Rangel
 */

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

  /**
   *Constructor de la Clase
   */
  constructor( private autenticado: ConecPantherService,
               private router: Router ) {

  }
  /**
   * metodo encargado de validar si el usuario
   * esta logueado
   */
  canActivate(): boolean {
   if ( this.autenticado.estaLogueado() ) {
     return true;
   } else {
     this.router.navigateByUrl('/login');
   }
  }
}
