import { Component, OnInit } from '@angular/core';
import { AdminModel } from 'src/app/model/adminModel';
import { ConecPantherService } from 'src/app/services/conec-panther.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modelDataAdmin: AdminModel = {
    user: "",
    password: "",
  };

  constructor( private userService: ConecPantherService) { }

  ngOnInit() {

  }

  loginAdmin() {
    this.userService.loginAdmin(this.modelDataAdmin).subscribe((data) => {
      this.modelDataAdmin = data.data;
      localStorage.setItem( 'usuario' , this.modelDataAdmin.nameUser);
       localStorage.setItem( 'keyAPI' , this.modelDataAdmin.keyAPI);
      console.log( this.modelDataAdmin.keyAPI);
      console.log( localStorage.getItem('usuario'));
      if (localStorage.getItem('keyAPI') ) {
        console.log( true);
      }
    } );
  }

  estaLogueado(): boolean {
    if (localStorage.getItem('keyAPI') ) {
      return true;
    } else {
      return false;
    }
  }

}
