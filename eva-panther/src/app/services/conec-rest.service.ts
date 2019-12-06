/**
 * @description Clase  que contiene los metodos para
 * realizar las distintas peticiones http
 * en seccion de usuarios y de roles
 * 
 * @author Yesid Rangel
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioInt } from '../model/userModel';
import { RolInt } from '../model/rolModel';

/**
 * constante que define el tipo contenido del formato de datos en json y la 
 * autorización para evualuar el permiso y coneccion
 * con el servidor
 */
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'authorization': localStorage.getItem('keyAPI')
  })
}
@Injectable({
  providedIn: 'root'
})


export class ConecRestService {

  /**
   * Se definen los url a trabajar 
   * usuaro y roles
   */
  private urlback = 'http://localhost/backend_panther/panther/rest/';
  private urlbackUsers = `${this.urlback}users/`;
  private urlbackRol = `${this.urlback}roles/`;


  constructor(private http: HttpClient) {

  }

  /**
   * Este metodo  se encarga de realizar la subscripción 
   * para traer los usurios almacenados en la base de datos
   */
  getUsers(): Observable<any> {
    return this.http.get<UsuarioInt>(this.urlbackUsers, httpOptions);

  }

  /**
   * Este metodo  se encarga de realizar la solicitud
   * para traer un usuario segun el id enviado por parametros
   * 
   * @param id 
   */
  getUser(id: string): Observable<any> {
    return this.http.get<UsuarioInt>(`${this.urlbackUsers}${id}`, httpOptions);
  }


  /**
   * Este metodo  se encarga de realizar la insersion
   * de un nuevo usuario con los datos enviados por parametros
    * @param usuarioInt 
    */
  addUser(usuarioInt: UsuarioInt): Observable<any> {
    let body = JSON.stringify(usuarioInt);
    return this.http.post(`${this.urlbackUsers}`, body, httpOptions);
  }

  /**
   * Este metodo  se encarga de realizar la edicion y la actulizacion 
   * enviando los datos  por parametros
   * @param usuarioInt 
   * @param id 
   */
  editUser(usuarioInt: UsuarioInt, id: string): Observable<any> {
    let body = JSON.stringify(usuarioInt);
    return this.http.put(`${this.urlbackUsers}${id}`, body, httpOptions);
  }

/**
 * Este metodo  se encarga de realizar la eliminacion suave
 * segun el parametro enviado
 * @param id 
 */
  deletUser(id): Observable<any> {
    return this.http.delete(`${this.urlbackUsers}${id}`, httpOptions);
  }

/**
 * peticiones de la seccion de roles
 */


  /**
   * Este metodo  se encarga de realizar la subscripción 
   * para traer los roles almacenados en la base de datos
   */
  getRoles(): Observable<any> {
    return this.http.get<RolInt>(this.urlbackRol, httpOptions);
  }

   /**
   * Este metodo  se encarga de realizar la solicitud
   * para traer un rol segun el id enviado por parametros
   * 
   * @param id 
   */
  getRol(id: string): Observable<any> {
    return this.http.get<RolInt>(`${this.urlbackRol}${id}`, httpOptions);
  }


  /**
  * Este metodo  se encarga de realizar la insersion
  * de un nuevo rol con los datos enviados por parametros
  * @param rolInt 
  */
  addRol(rolInt: RolInt): Observable<any> {
    let body = JSON.stringify(rolInt);
    return this.http.post(`${this.urlbackRol}`, body, httpOptions);
  }

    /**
   * Este metodo  se encarga de realizar la edicion y la actulizacion 
   * enviando los datos  por parametros
   * @param rolInt 
   * @param id 
   */

  editRol(rolInt: RolInt, id: string): Observable<any> {
    let body = JSON.stringify(rolInt);
    return this.http.put(`${this.urlbackRol}${id}`, body, httpOptions);
  }

   /**
   * Este metodo  se encarga de realizar la eliminacion suave
   * segun el parametro enviado
   * 
   * @param id 
   */
  deletRol(id): Observable<any> {
    return this.http.delete(`${this.urlbackRol}${id}`, httpOptions);
  }

}
