import { Component } from '@angular/core';
import { LoginComponent } from './navbar/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent{
  title = 'eva-panther';
  loginAdmin: boolean;
  nombreUsuario: string;


  constructor() {


  }
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit () {
    this.nombreUsuario = 'Admin';
    this.mostrarLogin();
  }
  
mostrarLogin() {
  if (localStorage.getItem('usuario')) {
    this.nombreUsuario = localStorage.getItem('usuario');
    this.loginAdmin = true;
  } else {
    this.loginAdmin = false;
  }
}
traerUsuario(nombreU: string){
 nombreU = localStorage.getItem('usuario');
}

}
