import { Component, OnInit } from '@angular/core';
import { UsuarioInt } from 'src/app/model/userModel';
import { ConecRestService } from 'src/app/services/conec-rest.service';

/**
 * @description Clase  que contiene los metodos para
 * la Administracion de usuarios
 * 
 * @author Yesid Rangel
 */
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})


export class UsuariosComponent implements OnInit {

  /**
   *Se declaran las variables globales a 
   *utilizar
   */
  public users: UsuarioInt[];
  public user: UsuarioInt;
  public editSection: boolean;
  public newSection: boolean;
  public IDuser: string = '';

  /**
  * Modelo de tipo UsuarioInt
  */
  modelUser: UsuarioInt = {
    nameUser: "",
    lastName: "",
    phoneNumber: "",
    user: "",
    password: "",
    roles: ""

  }
  /**
   *Constructor de la Clase
   */
  constructor(private usersService: ConecRestService) { }

  /** 
  * Metodo que se ejecuta cuando inicial el componente
  */
  ngOnInit() {
    this.traerUsuarios();
    this.newSection = false;
    this.editSection = false;
  }
  /** 
  * Este metodo se encarga: activar el formulario de
  * para editar un nuevo usuario
  */

  activateEdit(id): void {
    this.traerUsuario(id);
    this.editSection = true;
    this.newSection = false;
  }
 /**
  * control de dla seccion editar
  */
  activateNew(): void {
    this.newSection = true;
    this.editSection = false;
  }
 /**
  * Este metodo se encarga: de llamar a los usuario ya creados
  */
  traerUsuarios() {
    this.usersService.getUsers().subscribe(dataUsuarios => {
      if (dataUsuarios.code != 200) {
        window.location.reload();
      } else {
        this.users = dataUsuarios.data;
        
      }
    }, error => {
      window.location.reload();
      console.log(<any>error);
    });
  }

 /**
  * Este metodo se encarga: de LLamar usuario un rol se gun su ID
  */
  traerUsuario(id) {
    this.usersService.getUser(id).subscribe(dataUser => {
      this.user = dataUser.data;
    }, error => {
      console.log(<any>error)
    });
  }
    
  /**
  * Este metodo se encarga: de crear un nuevo usuario
  */

  nuevoUsuario() {
    this.usersService.addUser(this.modelUser).subscribe(
      (newUser) => {
        
        this.modelUser = newUser.data;
        this.newSection = false;
        this.traerUsuarios();
      }, error => {
        alert("Revise los datos ingresados e intente nuevamente")
      });
  }

 /**
  * Este metodo se encarga: de Editar un usuario ya existente
  */
  editUsuario(id, user) {
    this.usersService.editUser(user, id).subscribe(
      (editUser)=> {
        this.traerUsuarios();
        this.editSection = false;
      });
  }

 /**
  * Este metodo se encarga: de borrar un rol de manera suave
  */
  deleteUser(id) {
    this.usersService.deletUser(id).subscribe(
      () => {
        alert('Elemento borrado');
        window.location.reload();
      });
  }
}
