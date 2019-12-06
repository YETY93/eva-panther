/**
 * @description Clase  que contiene los metodos para
 * realizar el proceso de iniciar la seion y de cerrarla
 * 
 * @author Yesid Rangel
 */
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AdminModel } from '../model/adminModel';
import { Router } from '@angular/router';

/**
 * declaracion del tipo de dato que se enviara y se recibira en la transmision de datos
 */

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConecPantherService {

  /**
   * URL de la cual se basaran los servicios para las peticiones http
   */
  private urlback = 'http://localhost/backend_panther/panther/rest/';
  private urlLogin = `${this.urlback}useraction/login/`;


  constructor(private http: HttpClient,
    private router: Router) {

  }

  /**
   * Metodo encargado de realizar la subscripcion y el envio de los datos para el
   * inicio de la sesion
   * @param dataAdmin 
   */
  loginAdmin(dataAdmin: AdminModel): Observable<any> {
    const credentialsJson = JSON.stringify(dataAdmin);
    return this.http.post(`${this.urlLogin}`, credentialsJson, httpOptions);
  }

  /**
   * Metodo que se encarga de verificar si el hay algun usuario logueado
   */
  estaLogueado(): boolean {
    if (localStorage.getItem('keyAPI')) {
      return true;
    } else {
      return false;
    }
  }
/**
 * Metodo que se encarga de finalizar la sesion 
 */
  logAouth() {
    if (localStorage.getItem('keyAPI')) {
      localStorage.clear();
      this.router.navigateByUrl('/home');
    } else {
      alert("Ha ocurrido un error, actualice el navegador");
      localStorage.clear();
    }
  }
}
