import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './navbar/home/home.component';
import { LoginComponent } from './navbar/login/login.component';
import { ActualidadComponent } from './navbar/actualidad/actualidad.component';
import { QuienesSomosComponent } from './navbar/quienes-somos/quienes-somos.component';
import { ProyectoUnoComponent } from './asidebar/comienza/proyecto-uno/proyecto-uno.component';
import { ProyectoDosComponent } from './asidebar/comienza/proyecto-dos/proyecto-dos.component';
import { ProyectoTresComponent } from './asidebar/comienza/proyecto-tres/proyecto-tres.component';
import { ExternosComponent } from './asidebar/recursos/externos/externos.component';
import { HerramientasComponent } from './asidebar/herramientas/herramientas.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { RolesComponent } from './admin/roles/roles.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienesSomosComponent,
    LoginComponent,
    ActualidadComponent,
    ProyectoUnoComponent,
    ProyectoDosComponent,
    ProyectoTresComponent,
    ExternosComponent,
    HerramientasComponent,
    UsuariosComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
