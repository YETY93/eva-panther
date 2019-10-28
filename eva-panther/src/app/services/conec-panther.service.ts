import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AdminModel } from '../model/adminModel';
import { Router } from '@angular/router';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConecPantherService {

  private urlback = 'http://localhost/backend_panther/panther/rest/';
  private urlLogin = `${this.urlback}useraction/login/`;


  constructor(private http: HttpClient,
    private router: Router) {

  }

  loginAdmin(dataAdmin: AdminModel): Observable<any> {
    const credentialsJson = JSON.stringify(dataAdmin);
    return this.http.post(`${this.urlLogin}`, credentialsJson, httpOptions);
  }

  estaLogueado(): boolean {
    if (localStorage.getItem('keyAPI')) {
      return true;
    } else {
      return false;
    }
  }

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
