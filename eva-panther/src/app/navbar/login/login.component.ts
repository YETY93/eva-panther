import { Component, OnInit} from '@angular/core';
import { AdminModel } from 'src/app/model/adminModel';
import { ConecPantherService } from 'src/app/services/conec-panther.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  estadoSesion: boolean;
  modelDataAdmin: AdminModel = {
    user: '',
    password: '',
  };

  constructor(private userService: ConecPantherService,
    private router: Router) { }

  ngOnInit() {
    this.estadoSesion = false;
   
  }

  loginAdmin() {
    this.userService.loginAdmin(this.modelDataAdmin).subscribe((data) => {

      // tslint:disable-next-line: triple-equals
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

  logAut() {
    localStorage.clear();
  this.router.navigateByUrl('/home');
  }



}
