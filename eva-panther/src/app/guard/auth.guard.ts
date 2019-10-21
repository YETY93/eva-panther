import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginComponent } from '../navbar/login/login.component';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

  constructor( private autenticado: LoginComponent,
               private router: Router ) {
// inyectar un servicio y no un componente
  }
  canActivate(): boolean {
   if ( this.autenticado.estaLogueado() ) {
     return true;
   } else {
     this.router.navigateByUrl('login');
   }
  }
}
