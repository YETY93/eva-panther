import { Component, DoCheck } from '@angular/core';
import { ConecPantherService } from './services/conec-panther.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements DoCheck {
  title = 'eva-panther';
  loginAdmin: boolean;
  nombreUsuario: string = 'Admin';



  constructor(private logAuth: ConecPantherService) {


  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.nombreUsuario = localStorage.getItem('usuario');
    this.mostrarLogin();
  }
  ngDoCheck() {
    this.nombreUsuario = localStorage.getItem('usuario');
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
  traerUsuario() {
    this.nombreUsuario = sessionStorage.getItem('usuario');
  }
  salir() {
    this.logAuth.logAouth();
    alert("Ha salido del modo administrador");
  }

}
