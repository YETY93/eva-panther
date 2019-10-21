import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualidad',
  templateUrl: './actualidad.component.html',
  styleUrls: ['./actualidad.component.css']
})
export class ActualidadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  verLoacalStorage () {
    console.log(localStorage.getItem('usuario'));
  }
}
