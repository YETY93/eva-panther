import { Component, OnInit } from '@angular/core';
import { RolInt } from 'src/app/model/rolModel';
import { ConecRestService } from 'src/app/services/conec-rest.service';


/**
 * @description Clase  que contiene los metodos para
 * la Administracion de roles
 * 
 * @author Saray Burbano
 */
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  /** 
   *Se declaran las variables globales a 
   *utilizar
   */
  public roles: RolInt[];
  public rol: RolInt;
  public editSection: boolean;
  public newSection: boolean;
  public IDuser: string = '';

  /**
   * Modelo de tipo Rolint
   */
  modelRol: RolInt = {
    name: "",
    description: ""
  }

  /**
   *Constructor de la Clase
   */
  constructor(private rolesService: ConecRestService) { }

  /**
  * Metodo que se ejecuta cuando inicial el componente
  */
  ngOnInit() {
    this.traerRoles();
    this.newSection = false;
    this.editSection = false;
  }

 /**
  * Este metodo se encarga: de  activar la edicion de un rol
  */
  activateEdit(id): void {
    this.traerRol(id);
    this.editSection = true;
    this.newSection = false;
  }

 /**
  * Este metodo se encarga: activar el formulario de
  * para crear un nuevo rol
  */
  activateNew(): void {
    this.newSection = true;
    this.editSection = false;
  }
 /**
  * Este metodo se encarga: de llamar a los roles ya creados
  */
  traerRoles() {
    this.rolesService.getRoles().subscribe(dataRoles => {
      if (dataRoles.code != 200) {
        alert("En ele momento no hay usuarios disponibles")
      } else {
        this.roles = dataRoles.data;
      }
    }, error => {
      console.log(<any>error);
    });
  }

 /**
  * Este metodo se encarga: de LLamar a un rol se gun su ID
  */
  traerRol(id) {
    this.rolesService.getRol(id).subscribe(dataRol => {
      this.rol = dataRol.data;

    }, error => {
      console.log(<any>error)
    }
    );
  }
 /**
  * Este metodo se encarga: de crear un nuevo rol
  */
  nuevoRol() {
    this.rolesService.addRol(this.modelRol).subscribe(
      (newRol) => {
        this.modelRol = newRol.data;
        console.log(this.modelRol);
        this.newSection = false;
        this.traerRoles();
      });

  }
 /**
  * Este metodo se encarga: de Editar un rol ya existente
  */
  editRol(id, rol) {
    console.log(id);
    console.log(rol);
    this.rolesService.editRol(rol, id).subscribe(
      (editRol) => {
        this.traerRoles();
        this.editSection = false;

      });

  }
 /**
  * Este metodo se encarga: de borrar un rol de manera suave
  */
  deleteRol(id) {
    this.rolesService.deletRol(id).subscribe(
      () => {
        console.log(id);
        alert('Elemento borrado');
        window.location.reload();
      });
  }
}
