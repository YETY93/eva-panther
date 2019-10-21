import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UsuarioInt } from '../model/userModel';
import { AdminModel } from '../model/adminModel';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'authorization': '750e8b43e5ed564462c90ef0d382db26'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConecPantherService {

  private urlback = 'http://localhost/backend_panther/panther/rest/';
  private urlbackPerson =  `${this.urlback}persons/`;
  private urlLogin = `${this.urlback}useraction/login/`;
 

  constructor(private http: HttpClient) {

   }

   loginAdmin(dataAdmin: AdminModel ): Observable<any> {
    const credentialsJson = JSON.stringify( dataAdmin );
    return this.http.post(`${this.urlLogin}`, credentialsJson, httpOptions);
  }

}
