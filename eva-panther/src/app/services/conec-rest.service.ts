import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioInt } from '../model/userModel';
import { RolInt } from '../model/rolModel';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'authorization': '750e8b43e5ed564462c90ef0d382db26'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConecRestService {

  private urlback = 'http://localhost/backend_panther/panther/rest/';
  private urlbackUsers =  `${this.urlback}users/`;
  private urlbackRol =  `${this.urlback}roles/`;

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get<UsuarioInt>(this.urlbackUsers, httpOptions);
    
  }

  getUser(id:string):Observable<any>{
    return this.http.get<UsuarioInt>(`${this.urlbackUsers}${id}`, httpOptions);
  }
  
  addUser(usuarioInt:UsuarioInt):Observable<any>{
    let body = JSON.stringify( usuarioInt );
    console.log (body);
    return this.http.post( `${this.urlbackUsers}`, body , httpOptions);
  }

  editUser( usuarioInt:UsuarioInt, id:string):Observable<any>{
    let body = JSON.stringify(usuarioInt);
    return this.http.put(`${this.urlbackUsers}${id}`,body, httpOptions);
  }
  

  deletUser(id):Observable<any>{
  return this.http.delete(`${this.urlbackUsers}${id}`,httpOptions);
  }

  //PETICIONES ROL//

  getRoles():Observable<any>{
  return this.http.get<RolInt>(this.urlbackRol, httpOptions);
  }

  getRol(id:string):Observable<any>{
  return this.http.get<RolInt>(`${this.urlbackRol}${id}`, httpOptions);
  }

  addRol(rolInt:RolInt):Observable<any>{
  let body = JSON.stringify(rolInt);
  return this.http.post(`${this.urlbackRol}`, body , httpOptions);
  }

  editRol( rolInt:RolInt, id:string):Observable<any>{
    let body = JSON.stringify(rolInt);
    return this.http.put(`${this.urlbackRol}${id}`,body, httpOptions);
  }
  
  deletRol(id):Observable<any>{
    return this.http.delete(`${this.urlbackRol}${id}`,httpOptions);
    }
  
  


}
