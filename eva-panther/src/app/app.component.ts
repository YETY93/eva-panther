/**
 * @description Clase  que contiene los metodos para 
 * visualizar usuario y permitir la educion 
 * bajo usuarios autenticados
 * 
 * @author Yesid Rangel
 */
import { Component, DoCheck } from '@angular/core';
import { ConecPantherService } from './services/conec-panther.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements DoCheck {

/**
 * Variables definidas globales 
 * 
 */
  title = 'eva-panther';
  loginAdmin: boolean;
  nombreUsuario: string = 'Admin';


/**
 * metodo constructor de la clase con inyeccion de ConecPantherService
 * @param logAuth 
 */
  constructor(private logAuth: ConecPantherService) {


  }

 /**
  * metodo que se autoejcuta al inicar la vida del componente
  * autocargando el usuario actualmente registrado
  */
  ngOnInit() {
    this.nombreUsuario = localStorage.getItem('usuario');
    this.mostrarLogin();
  }
  /**
   * metodo que se encarga de validar los permisos temporarles
   * de un usuario registrado 
   */
  ngDoCheck() {
    this.nombreUsuario = localStorage.getItem('usuario');
    this.mostrarLogin();
  }

  /**
   * metodo que se encarga de visualizar el panel de inicio de sesion
   * si no existe un inicio de sesion anteriormente
   */
  mostrarLogin() {
    if (localStorage.getItem('usuario')) {
      this.nombreUsuario = localStorage.getItem('usuario');
      this.loginAdmin = true;
    } else {
      this.loginAdmin = false;
    }
  }
  
  /**
   * Metodo que se encarga de mostrar el usuario actualmente logueado
   */
  traerUsuario() {
    this.nombreUsuario = sessionStorage.getItem('usuario');
  }

  /**
   * 
   *Metodo que se encarga de cerra la sesion actualmente activa
   */
  salir() {
    this.logAuth.logAouth();
    alert("Ha salido del modo administrador");
  }

}
