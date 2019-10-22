import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginComponent } from '../navbar/login/login.component';
import { ConecPantherService } from '../services/conec-panther.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

  constructor( private autenticado: ConecPantherService,
               private router: Router ) {

  }
  canActivate(): boolean {
   if ( this.autenticado.estaLogueado() ) {
     return true;
   } else {
     this.router.navigateByUrl('/login');
   }
  }
}
