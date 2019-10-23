import { Component, OnInit } from '@angular/core';
import { RolInt } from 'src/app/model/rolModel';
import { ConecRestService } from 'src/app/services/conec-rest.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  public roles: RolInt[];
  public rol: RolInt;
  public editSection: boolean;
  public newSection: boolean;
  public IDuser: string = '';

  modelRol: RolInt = {
    name: "",
    description: ""
  }

  constructor(private rolesService: ConecRestService) { }

  ngOnInit() {
    this.traerRoles();
    this.newSection = false;
    this.editSection = false;
  }

  activateEdit(id): void {
    this.traerRol(id);
    this.editSection = true;
    this.newSection = false;
  }

  activateNew(): void {
    this.newSection = true;
    this.editSection = false;
  }

  traerRoles() {
    this.rolesService.getRoles().subscribe(dataRoles => {
      if (dataRoles.code != 200) {
        console.log(dataRoles);
      } else {
        this.roles = dataRoles.data;
      }
    }, error => {
      console.log(<any>error);
    });
  }

  traerRol(id) {
    this.rolesService.getRol(id).subscribe(dataRol => {
      this.rol = dataRol.data;

    }, error => {
      console.log(<any>error)
    }
    );
  }
  nuevoRol() {
    this.rolesService.addRol(this.modelRol).subscribe(
      (newRol) => {
        this.modelRol = newRol.data;
        console.log(this.modelRol);
        this.newSection = false;
        this.traerRoles();
      });

  }
  editRol(id, rol) {
    console.log(id);
    console.log(rol);
    this.rolesService.editRol(rol, id).subscribe(
      (editRol) => {
        this.traerRoles();
        this.editSection = false;

      });

  }
  deleteRol(id) {
    this.rolesService.deletRol(id).subscribe(
      () => {
        console.log(id);
        alert('Elemento borrado');
        window.location.reload();
      });
  }
}
