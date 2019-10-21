import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent{
  title = 'eva-panther';
  loginAdmin: boolean;


  constructor() {


  }
  ngOnInit() {

      this.loginAdmin = true;

  }
}
