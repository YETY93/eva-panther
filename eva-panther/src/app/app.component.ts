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
  ngOnInit() {
    this.nombreUsuario = 'Admin';
    this.mostrarLogin();
    console.log(localStorage.getItem('usuario'));
  }
mostrarLogin(){
  if(localStorage.getItem('usuario')){
    this.nombreUsuario = localStorage.getItem('usuario');
    this.loginAdmin = true;
  } else {
    this.loginAdmin = false;
  }
}

}
