import { Component, OnInit } from '@angular/core';
import { UsuarioInt } from 'src/app/model/userModel';
import { ConecRestService } from 'src/app/services/conec-rest.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public users: UsuarioInt[];
  public user: UsuarioInt;
  public editSection: boolean;
  public newSection: boolean;
  public IDuser: string = '';

  modelUser: UsuarioInt = {
    nameUser: "",
    lastName: "",
    phoneNumber: "",
    user: "",
    password: "",
    roles: ""

  }

  constructor(private usersService: ConecRestService) { }

  ngOnInit() {
    this.traerUsuarios();
    this.newSection = false;
    this.editSection = false;
  }

  activateEdit(id): void {
    this.traerUsuario(id);
    this.editSection = true;
    this.newSection = false;
  }

  activateNew(): void {
    this.newSection = true;
    this.editSection = false;
  }

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

  traerUsuario(id) {
    this.usersService.getUser(id).subscribe(dataUser => {
      this.user = dataUser.data;
    }, error => {
      console.log(<any>error)
    });
  }

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

  editUsuario(id, user) {
    this.usersService.editUser(user, id).subscribe(
      (editUser)=> {
        this.traerUsuarios();
        this.editSection = false;
      });
  }

  deleteUser(id) {
    this.usersService.deletUser(id).subscribe(
      () => {
        alert('Elemento borrado');
        window.location.reload();
      });
  }
}
