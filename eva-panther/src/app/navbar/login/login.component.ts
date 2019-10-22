import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AdminModel } from 'src/app/model/adminModel';
import { ConecPantherService } from 'src/app/services/conec-panther.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() usuarioActual: EventEmitter <string> = new EventEmitter();
  estadoSesion: boolean;
  modelDataAdmin: AdminModel = {
    user: '',
    password: '',
  };

  constructor(private userService: ConecPantherService,
    private router: Router) { }

  ngOnInit() {
    // this.estaLogueado();
    this.estadoSesion = false;
  }

  loginAdmin() {
    this.userService.loginAdmin(this.modelDataAdmin).subscribe((data) => {

      // tslint:disable-next-line: triple-equals
      if (data.code == 200) {
        console.log(data);
        this.modelDataAdmin = data.data;
        localStorage.setItem('usuario', this.modelDataAdmin.nameUser);
        localStorage.setItem('keyAPI', this.modelDataAdmin.keyAPI);
        this.estadoSesion = true;
        alert('Ha ingresado correctamente');
        this.router.navigateByUrl('/home');
        this.usuarioActual.emit(localStorage.getItem('usuario'));
      } else {
      alert('Contraseña o usuarioincorrecto');
      this.estadoSesion = false;
      localStorage.clear();
      }
    });
  }

  // estaLogueado(): boolean {
  //   if (localStorage.getItem('keyAPI')) {
  //     this.estadoSesion = true;
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  logAut() {
  localStorage.clear();
  this.router.navigateByUrl('/home');
  }



}
