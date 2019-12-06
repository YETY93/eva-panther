import { Component, OnInit} from '@angular/core';
import { AdminModel } from 'src/app/model/adminModel';
import { ConecPantherService } from 'src/app/services/conec-panther.service';
import { Router } from '@angular/router';

/**
 * @description Clase  que contiene el inicio de sesión y control de acceso
 * @author Yesid Rangel
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    /**
   *Se declaran las variables globales a 
   *utilizar y definicion del modelo modelDataAdmin
   */

  estadoSesion: boolean;

  modelDataAdmin: AdminModel = {
    user: '',
    password: '',
  };

  /**
   * Metodo constructor de la clase con la inyeccion del servicio
   * de conexion de tipo ConecPantherService
   *  
   */
  constructor(private userService: ConecPantherService,
    private router: Router) { }

   /**
   * Metodo que se ejecuta cuando inicial el componente el
   * cual define como falso en primera medida
   */
  ngOnInit() {
    this.estadoSesion = false;
   
  }

  /**
   * metodo encargado de realizar la validacion de datos ingresados y
   * verificar si los datos pertenecen a un usuario
   * si la repuesta es verdadera tendra privilegios de administracion
   * si es falsa retornara un mensaje de advertencia
   */
  loginAdmin() {
    this.userService.loginAdmin(this.modelDataAdmin).subscribe((data) => {

      if (data.code == 200) {
        this.modelDataAdmin = data.data;
        localStorage.setItem('usuario', this.modelDataAdmin.nameUser);
        localStorage.setItem('keyAPI', this.modelDataAdmin.keyAPI);
        this.estadoSesion = true;
        alert('Ha ingresado correctamente');
        this.router.navigateByUrl('/home');
      } else {
      alert('Contraseña o usuarioincorrecto');
      this.estadoSesion = false;
      localStorage.clear();
      }
    });
  }

  /**
   * metodo encargado de realizar el cierre de la sesion activa
   */
  logAut() {
    localStorage.clear();
  this.router.navigateByUrl('/home');
  }



}
