import { Component, OnInit } from '@angular/core';
import { Recurso } from './model/recurso';

@Component({
  selector: 'app-externos',
  templateUrl: './externos.component.html',
  styleUrls: ['./externos.component.css']
})
export class ExternosComponent implements OnInit {

 recurso_1 : Recurso;
 recurso_2 : Recurso;
 recurso_3 : Recurso;
 listaRecursos: Recurso[];


  constructor() { }

  ngOnInit() {
    this.recurso_1 = {
      id:1,
      nombre:"",
      descripcion:"",
      link:""
    };
    this.recurso_2 = {
      id:1,
      nombre:"",
      descripcion:"",
      link:""
    };
    
    this.recurso_3 = {
      id:1,
      nombre:"",
      descripcion:"",
      link:""
    };

    this.listaRecursos = [
      this.recurso_1,
      this.recurso_2,
      this.recurso_3 
    ]
    
    
  }

}
